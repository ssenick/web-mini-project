import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Text, TextFontSize, TextVariant } from '@/shared/ui/Text/Text';

import { getLoginError } from '../../model/selectros/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectros/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectros/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
   className?: string;
   max?: boolean;
}

const initialReducers: ReducersList = {
   loginForm: loginReducer,
};

const LoginForm = memo(({ className, max }: LoginFormProps) => {
   const { t } = useTranslation();
   const username = useSelector(getLoginUsername);
   const password = useSelector(getLoginPassword);
   const isLoading = useSelector(getLoginIsLoading);
   const error = useSelector(getLoginError);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const user = useSelector(getUserAuthData);
   const onChangeUsername = useCallback(
      (value: string) => {
         dispatch(loginActions.setUsername(value));
      },
      [dispatch],
   );

   const onChangePassword = useCallback(
      (value: string) => {
         dispatch(loginActions.setPassword(value));
      },
      [dispatch],
   );

   const onLoginClick = useCallback(async () => {
      if (username && password) {
         await dispatch(loginByUsername({ username, password }));
      }
   }, [dispatch, username, password]);

   const onKeyDown = useCallback(
      async (e: KeyboardEvent) => {
         if (e.key === 'Enter' && username && password) {
            await onLoginClick();
         }
      },
      [onLoginClick, username, password],
   );

   useEffect(() => {
      window.addEventListener('keydown', onKeyDown);
      return () => {
         window.removeEventListener('keydown', onKeyDown);
      };
   }, [onKeyDown]);

   useEffect(() => {
      if (user) {
         navigate('/profile/' + user.id);
      }
   }, [navigate, user]);
   return (
      <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
         <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.title} size={TextFontSize.M} title={t('Авторизация')} />
            {error && (
               <Text
                  className={cls.error}
                  variant={TextVariant.ERROR}
                  size={TextFontSize.XS}
                  text={t('Пользователь не найдет или данные не верны')}
               />
            )}
            <div className={cls.wrapper}>
               <Input
                  placeholder={t('User name')}
                  variant={InputVariant.INVERSE_BG}
                  onChange={onChangeUsername}
                  value={username}
                  autofocus={true}
               />
               <Input
                  type="password"
                  placeholder={t('Password')}
                  variant={InputVariant.INVERSE_BG}
                  onChange={onChangePassword}
                  value={password}
               />
               <div className={classNames(cls.loginBottom, { [cls.max]: max }, [])}>
                  <Button
                     max
                     size={ButtonSize.M}
                     variant={ButtonVariant.BORDER}
                     onClick={onLoginClick}
                     disabled={isLoading}
                  >
                     {t('Вход')}
                  </Button>
               </div>
            </div>
         </div>
      </DynamicModuleLoader>
   );
});
export default LoginForm;
