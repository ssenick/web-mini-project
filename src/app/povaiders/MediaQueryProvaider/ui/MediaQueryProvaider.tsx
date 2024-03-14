import { createContext, type ReactNode, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
interface ReturnContextTypes {
   isBig: boolean;
   isPc: boolean;
   isMobile: boolean;
   isTablet: boolean;
   isSmallMobile: boolean;
}
const defaultContext = {
   isBig: false ?? true,
   isPc: false,
   isMobile: false ?? true,
   isTablet: false,
   isSmallMobile: false,
};
const MediaQueryContext = createContext(defaultContext);

interface MediaQueryProviderProps {
   children: ReactNode;
}

const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
   const isBig = useMediaQuery({ minWidth: 1440 });
   const isPc = useMediaQuery({ maxWidth: 1440 });
   const isTablet = useMediaQuery({ maxWidth: 992 });
   const isMobile = useMediaQuery({ maxWidth: 772 });
   const isSmallMobile = useMediaQuery({ maxWidth: 410 });

   const values: ReturnContextTypes = {
      isBig,
      isPc,
      isTablet,
      isMobile,
      isSmallMobile,
   };

   return <MediaQueryContext.Provider value={values}>{children}</MediaQueryContext.Provider>;
};

const useMediaQueryValues = (): ReturnContextTypes => {
   const context = useContext(MediaQueryContext);
   if (!context) {
      throw new Error('useMediaQueryValues must be used within a MediaQueryProvider');
   }
   return context;
};

export { MediaQueryProvider, useMediaQueryValues };
