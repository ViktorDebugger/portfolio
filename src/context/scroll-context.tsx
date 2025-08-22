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
  registerSection: (section: string) => React.RefObject<HTMLDivElement | null>;
  activeSection: string;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const refsRef = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});

  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const scrollToSection = useCallback((section: string) => {
    setIsScrolling(true);
    refsRef.current[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(section);

    setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  const registerSection = useCallback((section: string) => {
    if (!refsRef.current[section]) {
      refsRef.current[section] = useRef<HTMLDivElement>(null);
    }
    return refsRef.current[section];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 100;
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
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, isScrolling]);

  return (
    <ScrollContext.Provider
      value={{
        refs: refsRef.current,
        scrollToSection,
        registerSection,
        activeSection,
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