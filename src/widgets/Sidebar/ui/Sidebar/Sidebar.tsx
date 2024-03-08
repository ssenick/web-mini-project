import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import CreateIcon from '@/shared/assets/icons/create.svg';
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
   const isAuth = useSelector(getUserAuthData);
   const sidebarLinksList = useSelector(getSidebarLinks);

   const toggleCollapse = useCallback(() => {
      setCollapsed(!collapsed);
   }, [collapsed]);

   return (
      <aside
         data-testid="sidebar"
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
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
         <nav>
            <ul className={cls.list}>
               {sidebarLinksList.map((link) => (
                  <SidebarLink key={link.path} item={link} collapsed={collapsedStorybook || collapsed} />
               ))}
            </ul>
         </nav>
         {isAuth && (
            <AppLink to={getRouteArticlesCreate()} variant={AppLinkVariant.BORDER} className={cls.createBtn}>
               <Icon Svg={CreateIcon} className={cls.icon} />
               <span>{t('Создать статью')}</span>
            </AppLink>
         )}
      </aside>
   );
});
