import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { type Country, CountrySelect } from '@/entities/Country';
import { type Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextFontSize, TextVariant } from '@/shared/ui/Text/Text';
import { ErrorMessage } from '@/widgets/ErrorMessage';

import { type Profile } from '../..';
import { ValidateProfileErrors } from '../../model/consts/profileConsts';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
   className?: string;
   data?: Profile;
   isLoading?: boolean;
   error?: ValidateProfileErrors[];
   readonly?: boolean;
   onChangeFirstName?: (value?: string) => void;
   onChangeLastName?: (value?: string) => void;
   onChangeUsername?: (value?: string) => void;
   onChangeAge?: (value?: string) => void;
   onChangeAvatar?: (value?: string) => void;
   onChangeCurrency?: (currency: Currency) => void;
   onChangeCountry?: (currency: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps): JSX.Element => {
   const {
      className,
      data,
      isLoading,
      error,
      readonly,
      onChangeFirstName,
      onChangeLastName,
      onChangeUsername,
      onChangeAge,
      onChangeAvatar,
      onChangeCurrency,
      onChangeCountry,
   } = props;
   const { t } = useTranslation();
   const [errorFirstname, setErrorFirstname] = useState('');
   const [errorLastname, setErrorLastname] = useState('');
   const [errorUsername, setErrorUsername] = useState('');
   const [errorAge, setErrorAge] = useState('');
   const [errorServerError, setErrorServerError] = useState('');

   const errorsValidateTranslates: Record<string, string> = useMemo(() => {
      return {
         [ValidateProfileErrors.INCORRECT_USER_FIRST_NAME]: t('Не указано имя'),
         [ValidateProfileErrors.INCORRECT_USER_LAST_NAME]: t('Не указана фамилия'),
         [ValidateProfileErrors.INCORRECT_USER_USER_NAME]: t('Не указана имя пользователя'),
         [ValidateProfileErrors.INCORRECT_AGE]: t('Не указан возраст'),
         [ValidateProfileErrors.INCORRECT_CITY]: t('Не указан город'),
         [ValidateProfileErrors.SERVER_ERROR]: t('что-то пошло не так'),
      };
   }, [t]);

   const setErrors = useCallback(() => {
      error?.length &&
         error.forEach((err) => {
            if (ValidateProfileErrors.INCORRECT_USER_FIRST_NAME === err)
               setErrorFirstname(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_USER_LAST_NAME === err)
               setErrorLastname(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_USER_USER_NAME === err)
               setErrorUsername(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.INCORRECT_AGE === err) setErrorAge(errorsValidateTranslates[err]);
            if (ValidateProfileErrors.SERVER_ERROR === err)
               setErrorServerError(errorsValidateTranslates[err]);
         });
   }, [error, errorsValidateTranslates]);
   useEffect(() => {
      setErrors();
      return () => {
         setErrorFirstname('');
         setErrorLastname('');
         setErrorUsername('');
         setErrorAge('');
         setErrorServerError('');
      };
   }, [setErrors, errorFirstname, errorLastname, errorUsername, errorAge, errorServerError]);

   if (isLoading) {
      // return <LoaderPoints/>
      return (
         <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
               <div className={cls.header}>
                  <Skeleton border={'50%'} height={100} width={100} />
               </div>
               <div className={cls.row}>
                  <Skeleton border={'5px'} height={23} width={140} />
                  <div className={cls.column}>
                     <div className={cls.inputWithError}>
                        <Skeleton border={'5px'} height={58} width={'100%'} />
                     </div>
                     <div className={cls.inputWithError}>
                        <Skeleton border={'5px'} height={58} width={'100%'} />
                     </div>
                     <div className={cls.inputWithError}>
                        <Skeleton border={'5px'} height={58} width={'100%'} />
                     </div>
                     <Skeleton className={cls.currency} border={'5px'} height={58} width={'100%'} />
                  </div>
               </div>
               <div className={cls.row}>
                  <Skeleton border={'5px'} height={23} width={140} />
                  <div className={cls.column}>
                     <div className={cls.inputWithError}>
                        <Skeleton border={'5px'} height={58} width={'100%'} />
                     </div>
                     <Skeleton className={cls.avatar} border={'5px'} height={58} width={'100%'} />
                     <Skeleton className={cls.currency} border={'5px'} height={58} width={'100%'} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
   if (errorServerError) {
      return (
         <Text
            texAlign={TextAlign.CENTER}
            variant={TextVariant.ERROR}
            title={t('что-то пошло не так')}
            text={t('попробуйте обновить страницу')}
         />
      );
   }
   if (!data) {
      return <ErrorMessage title={t('упс')} description={t('что-то пошло не так')} />;
   }
   return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
         <div className={cls.data}>
            <div className={cls.header}>
               {data?.avatar && <Avatar className={cls.avatar} src={data?.avatar} />}
            </div>
            <div className={cls.row}>
               <Text title={t('Личные данные')} />
               <div className={cls.column}>
                  <div className={cls.inputWithError}>
                     <Input
                        data-testid={'ProfileCard.NameInput'}
                        className={cls.input}
                        label={t('Имя')}
                        onChange={onChangeFirstName}
                        readonly={readonly}
                        variant={InputVariant.INVERSE_BG}
                        value={data?.first}
                     />
                     {errorFirstname && (
                        <Text
                           data-testid={'ProfileCard.NameInput.Error'}
                           className={cls.errorInput}
                           variant={TextVariant.ERROR}
                           size={TextFontSize.SXS}
                           text={errorFirstname}
                        />
                     )}
                  </div>
                  <div className={cls.inputWithError}>
                     <Input
                        data-testid={'ProfileCard.LastNameInput'}
                        className={cls.input}
                        label={t('Фамилия')}
                        onChange={onChangeLastName}
                        readonly={readonly}
                        variant={InputVariant.INVERSE_BG}
                        value={data?.lastname}
                     />
                     {errorLastname && (
                        <Text
                           data-testid={'ProfileCard.LastNameInput.Error'}
                           className={cls.errorInput}
                           variant={TextVariant.ERROR}
                           size={TextFontSize.SXS}
                           text={errorLastname}
                        />
                     )}
                  </div>
                  <div className={cls.inputWithError}>
                     <Input
                        data-testid={'ProfileCard.AgeInput'}
                        className={cls.age}
                        label={t('Возраст')}
                        onChange={onChangeAge}
                        readonly={readonly}
                        variant={InputVariant.INVERSE_BG}
                        value={data?.age}
                     />
                     {errorAge && (
                        <Text
                           data-testid={'ProfileCard.AgeInput.Error'}
                           className={cls.errorInput}
                           variant={TextVariant.ERROR}
                           size={TextFontSize.SXS}
                           text={errorAge}
                        />
                     )}
                  </div>
                  <CountrySelect
                     onChange={onChangeCountry}
                     className={classNames(cls.currency, {}, [cls.country])}
                     value={data?.country}
                     readonly={readonly}
                  />
               </div>
            </div>
            <div className={cls.row}>
               <Text title={t('Настройки профиля')} />
               <div className={cls.column}>
                  <div className={classNames(cls.inputWithError, {}, [cls.name])}>
                     <Input
                        data-testid={'ProfileCard.UsernameInput'}
                        className={cls.username}
                        label={t('Имя пользователя')}
                        onChange={onChangeUsername}
                        readonly={readonly}
                        variant={InputVariant.INVERSE_BG}
                        value={data?.username}
                     />
                     {errorUsername && (
                        <Text
                           data-testid={'ProfileCard.UsernameInput.Error'}
                           className={cls.errorInput}
                           variant={TextVariant.ERROR}
                           size={TextFontSize.SXS}
                           text={errorUsername}
                        />
                     )}
                  </div>
                  <Input
                     data-testid={'ProfileCard.AvatarInput'}
                     className={cls.avatar}
                     label={t('Ссылка на аватар')}
                     onChange={onChangeAvatar}
                     readonly={readonly}
                     variant={InputVariant.INVERSE_BG}
                     value={data?.avatar}
                  />
                  <CurrencySelect
                     onChange={onChangeCurrency}
                     className={cls.currency}
                     value={data?.currency}
                     readonly={readonly}
                  />
               </div>
            </div>
         </div>
      </div>
   );
});
