import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from '@/app/povaiders/Router';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

const App = (): JSX.Element => {
   const dispatch = useDispatch();
   const inited = useSelector(getUserInited);

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, [dispatch]);

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback="">
            <Header className="app__header" />
            <Sidebar className="app__sidebar" />
            {inited && <AppRouter className="app__content" />}
         </Suspense>
      </div>
   );
};

export default App;
