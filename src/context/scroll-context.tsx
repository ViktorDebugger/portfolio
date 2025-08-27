import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";

interface ScrollContextType {
  refs: Record<string, React.RefObject<HTMLDivElement | null>>;
  scrollToSection: (section: string) => void;
  registerSection: (
    section: string,
    bodyClass?: string,
  ) => React.RefObject<HTMLDivElement | null>;
  activeSection: string;
  setBodyClass: (bodyClass: string) => void;
  currentBodyClass: string;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const refsRef = useRef<
    Record<string, React.RefObject<HTMLDivElement | null>>
  >({});
  const sectionBodyMap = useRef<Record<string, string>>({});

  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [currentBodyClass, setCurrentBodyClass] = useState<string>("");

  const setBodyClass = useCallback(
    (bodyClass: string) => {
      if (currentBodyClass) {
        document.body.classList.remove(currentBodyClass);
      }

      if (bodyClass) {
        document.body.classList.add(bodyClass);
      }

      setCurrentBodyClass(bodyClass);
    },
    [currentBodyClass],
  );

  const registerSection = useCallback((section: string, bodyClass?: string) => {
    if (!refsRef.current[section]) {
      refsRef.current[section] = useRef<HTMLDivElement>(null);
    }

    if (bodyClass) {
      sectionBodyMap.current[section] = bodyClass;
    }

    return refsRef.current[section];
  }, []);

  const scrollToSection = useCallback(
    (section: string) => {
      setIsScrolling(true);
      const element = refsRef.current[section]?.current;
      if (element) {
        const elementPosition = element.offsetTop - 200;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }

      setActiveSection(section);

      const bodyClass = sectionBodyMap.current[section];
      if (bodyClass) {
        setBodyClass(bodyClass);
      }

      setTimeout(() => setIsScrolling(false), 1000);
    },
    [setBodyClass],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 300;
      let newActiveSection = "home";

      Object.entries(refsRef.current).forEach(([sectionName, ref]) => {
        if (ref?.current) {
          const element = ref.current;
          const sectionStart = element.offsetTop;
          const sectionEnd = element.offsetTop + element.offsetHeight;

          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            newActiveSection = sectionName;
          }
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);

        const bodyClass = sectionBodyMap.current[newActiveSection];
        if (bodyClass) {
          setBodyClass(bodyClass);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, isScrolling, setBodyClass]);

  useEffect(() => {
    return () => {
      if (currentBodyClass) {
        document.body.classList.remove(currentBodyClass);
      }
    };
  }, [currentBodyClass]);

  return (
    <ScrollContext.Provider
      value={{
        refs: refsRef.current,
        scrollToSection,
        registerSection,
        activeSection,
        setBodyClass,
        currentBodyClass,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
};
