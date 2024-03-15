import { createContext, type ReactNode, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
   isBigScreen,
   isMobileScreen,
   isPcScreen,
   isSmallMobileScreen,
   isTabletScreen,
} from '@/shared/const/querys';
interface ReturnContextTypes {
   isBig: boolean;
   isPc: boolean;
   isMobile: boolean;
   isTablet: boolean;
   isSmallMobile: boolean;
}
const defaultContext = {
   isBig: false,
   isPc: false,
   isMobile: false,
   isTablet: false,
   isSmallMobile: false,
};
const MediaQueryContext = createContext(defaultContext);

interface MediaQueryProviderProps {
   children: ReactNode;
}

const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
   const isBig = useMediaQuery({ minWidth: isBigScreen });
   const isPc = useMediaQuery({ maxWidth: isPcScreen });
   const isTablet = useMediaQuery({ maxWidth: isTabletScreen });
   const isMobile = useMediaQuery({ maxWidth: isMobileScreen });
   const isSmallMobile = useMediaQuery({ maxWidth: isSmallMobileScreen });

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
