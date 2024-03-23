import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

import { type SidebarLinkType } from '../../model/types/sidebar';
import cls from './SidebarLink.module.scss';

interface SidebarLinkProps {
   className?: string;
   item: SidebarLinkType;
   collapsed: boolean;
}

export const SidebarLink = memo(({ item, collapsed, className }: SidebarLinkProps) => {
   const { t } = useTranslation();
   const isAuth = useSelector(getUserAuthData);
   const location = useLocation();

   if (item.authOnly && !isAuth) {
      return null;
   }

   return (
      <li
         data-testid="sidebar-link"
         className={classNames(
            cls.item,
            { [cls.collapsed]: collapsed, [cls.active]: location.pathname === item.path },
            [className],
         )}
      >
         <AppLink className={cls.link} to={item.path}>
            <item.Icon className={cls.icon} />
            <span>{t(item.text)}</span>
         </AppLink>
      </li>
   );
});
