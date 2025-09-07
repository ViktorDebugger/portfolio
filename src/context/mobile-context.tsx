import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface MobileContextType {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

interface MobileProviderProps {
  children: React.ReactNode;
}

export const MobileProvider = ({ children }: MobileProviderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return context;
};
