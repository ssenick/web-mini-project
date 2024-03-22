import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Theme, useTheme } from '@/app/povaiders/ThemeProvaider';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { LoginForm, LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/NotificationButton';
import AdminIcon from '@/shared/assets/icons/admin.svg';
import LoginIcon from '@/shared/assets/icons/login.svg';
import LogoDarkIcon from '@/shared/assets/icons/logo.svg';
import LogoWhiteIcon from '@/shared/assets/icons/logo-w.svg';
import LogoutIcon from '@/shared/assets/icons/logout.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { getRouteAdmin, getRouteProfile } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Dropdown, type DropdownItem } from '@/shared/ui/Dropdown/Dropdown';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

export const Header = memo(({ className }: HeaderProps): JSX.Element => {
   const { theme } = useTheme();
   const { t } = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);
   const userAuth = useSelector(getUserAuthData);
   const isAdmin = useSelector(isUserAdmin);
   const isManager = useSelector(isUserManager);
   const dispatch = useDispatch();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const onCloseDrawer = useCallback(() => {
      setIsDrawerOpen(false);
   }, []);
   const onOpenDrawer = useCallback(() => {
      setIsDrawerOpen(true);
   }, []);
   const onCloseModal = useCallback((): void => {
      setIsAuthModal(false);
   }, []);
   const onShowModal = useCallback((): void => {
      setIsAuthModal(true);
   }, []);

   const onLogout = useCallback(() => {
      dispatch(userActions.logout());
      // if (location?.pathname.substring(1) === RoutPath.profile) {
      //   navigate('/')
      // }
   }, [dispatch]);

   const isAdminPanelIsAvailable = isAdmin || isManager;

   useEffect(() => {
      if (userAuth) {
         onCloseModal();
         onCloseDrawer();
      }
   }, [userAuth, onCloseModal, onCloseDrawer]);

   const DropDawnItems: DropdownItem[] = useMemo(
      () => [
         ...(isAdminPanelIsAvailable
            ? [
                 {
                    content: (
                       <span className={cls.item}>
                          <Icon className={cls.icon} Svg={AdminIcon} />
                          {t('Админ панель')}
                       </span>
                    ),
                    href: getRouteAdmin(),
                 },
              ]
            : []),
         {
            content: (
               <span className={cls.item}>
                  <Icon className={cls.icon} Svg={ProfileIcon} />
                  {t('Профиль')}
               </span>
            ),
            href: getRouteProfile(userAuth?.id ?? ''),
         },
         {
            content: (
               <span className={cls.item}>
                  <Icon className={classNames(cls.icon, {}, [cls.red])} Svg={LogoutIcon} />
                  <Text variant={TextVariant.ERROR} text={t('Выход')} />
               </span>
            ),
            onClick: onLogout,
         },
      ],
      [userAuth, onLogout, t, isAdminPanelIsAvailable],
   );

   const trigger = (
      <Button className={cls.login} onClick={onOpenDrawer} variant={ButtonVariant.BACKGROUND} withIcon={true}>
         <LoginIcon />
         {t('Вход')}
      </Button>
   );

   return (
      <header className={classNames(cls.Header, {}, [className])}>
         <AppLink className={cls.logo} noActive to="/" variant={AppLinkVariant.CLEAN}>
            {(theme === Theme.DARK || theme === Theme.FUNNY) && <LogoWhiteIcon />}
            {theme === Theme.LIGHT && <LogoDarkIcon />}
         </AppLink>
         <div className={cls.action}>
            <ThemeSwitcher />
            <LangSwitcher />
            {userAuth ? (
               <>
                  <NotificationButton />
                  <Dropdown items={DropDawnItems} trigger={<Avatar size={30} src={userAuth.avatar} />} />
               </>
            ) : (
               <>
                  <BrowserView>
                     <Button
                        onClick={onShowModal}
                        className={cls.login}
                        variant={ButtonVariant.BACKGROUND}
                        withIcon={true}
                     >
                        <LoginIcon />
                        {t('Вход')}
                     </Button>
                  </BrowserView>
                  <MobileView>
                     {trigger}
                     <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                        <LoginForm max />
                     </Drawer>
                  </MobileView>
               </>
            )}
         </div>
         <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </header>
   );
});
