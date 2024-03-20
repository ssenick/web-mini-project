import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQueryValues } from '@/app/povaiders/MediaQueryProvaider';
import { AppRouter } from '@/app/povaiders/Router';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

const fixHeight = (): void => {
   const vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const App = (): JSX.Element => {
   const dispatch = useDispatch();
   const inited = useSelector(getUserInited);
   const { isMobile } = useMediaQueryValues();

   useEffect(() => {
      dispatch(userActions.initAuthData());

      if (isMobile) {
         fixHeight();
      }
   }, [dispatch, isMobile]);

   return (
      <div className={classNames('app', { mobile: isMobile }, [])}>
         <Suspense fallback="">
            <Header className="app__header" />
            <Sidebar className="app__sidebar" />
            {inited && <AppRouter className="app__content" />}
         </Suspense>
      </div>
   );
};

export default App;
