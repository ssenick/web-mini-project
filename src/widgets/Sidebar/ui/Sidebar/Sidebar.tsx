import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useMediaQueryValues } from '@/app/povaiders/MediaQueryProvaider';
import { getUserAuthData } from '@/entities/User';
import CreateIcon from '@/shared/assets/icons/create.svg';
import ErrorIcon from '@/shared/assets/icons/error.svg';
import { getRouteArticlesCreate } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
   collapsedStorybook?: boolean;
}

export const Sidebar = memo(({ className, collapsedStorybook }: SidebarProps): JSX.Element => {
   const { t } = useTranslation();
   const [collapsed, setCollapsed] = useState(collapsedStorybook || false);
   const [error, setError] = useState(false);
   const isAuth = useSelector(getUserAuthData);
   const sidebarLinksList = useSelector(getSidebarLinks);
   const { isTablet } = useMediaQueryValues();

   const toggleCollapse = useCallback(() => {
      setCollapsed(!collapsed);
   }, [collapsed]);

   const onThrow = useCallback((): void => {
      setError(true);
   }, []);

   const navigationComponent = useMemo(
      () => (
         <nav>
            <ul className={cls.list}>
               {sidebarLinksList.map((link) => (
                  <SidebarLink key={link.path} item={link} collapsed={collapsedStorybook || collapsed} />
               ))}
            </ul>
         </nav>
      ),
      [collapsed, collapsedStorybook, sidebarLinksList],
   );
   const footerSidebarComponent = useMemo(
      () => (
         <div className={cls.footer}>
            <Button
               onClick={onThrow}
               variant={ButtonVariant.BORDER}
               max
               withIcon
               center
               className={cls.createBtn}
            >
               <Icon Svg={ErrorIcon} className={cls.icon} />
               <span>{t('ошибка')}</span>
            </Button>
            <AppLink to={getRouteArticlesCreate()} variant={AppLinkVariant.BORDER} className={cls.createBtn}>
               <Icon Svg={CreateIcon} className={cls.icon} />
               <span>{t('Создать статью')}</span>
            </AppLink>
         </div>
      ),
      [t, onThrow],
   );

   useEffect(() => {
      if (error) {
         throw new Error();
      }
   }, [error]);

   if (isTablet) {
      return (
         <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: true }, [className])}
         >
            {navigationComponent}
            {isAuth && footerSidebarComponent}
         </aside>
      );
   }

   return (
      <aside
         data-testid="sidebar"
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
         {!isTablet && (
            <Button
               data-testid="sidebar-toggle"
               variant={ButtonVariant.CLEAN}
               onClick={toggleCollapse}
               className={cls.burgerBtn}
            >
               <span className={cls.itemBtn}></span>
               <span className={cls.itemBtn}></span>
               <span className={cls.itemBtn}></span>
            </Button>
         )}
         {navigationComponent}

         {isAuth && footerSidebarComponent}
      </aside>
   );
});
