import { memo, type ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Language from '@/shared/assets/icons/language.svg';
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
   className?: string;
   children?: ReactNode;
}
enum Languages {
   RU = 'ru',
   EN = 'en',
}

export const LangSwitcher = memo(({ className, children }: LangSwitcherProps): JSX.Element => {
   const { i18n } = useTranslation();

   const toggle = useCallback(async (): Promise<void> => {
      switch (localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)) {
         case Languages.RU:
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.EN);
            await i18n.changeLanguage((i18n.language = Languages.EN));
            break;
         case Languages.EN:
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.RU);
            await i18n.changeLanguage((i18n.language = Languages.RU));
            break;
         default:
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.RU);
            await i18n.changeLanguage((i18n.language = Languages.RU));
      }
   }, [i18n]);

   return (
      <Button
         variant={ButtonVariant.CLEAN}
         square
         className={classNames(cls.LangSwitcher, {}, [className])}
         onClick={toggle}
         size={ButtonSize.SM}
      >
         {/* {children || t('Язык')} */}
         {children || <Icon className={cls.icon} Svg={Language} width={'30px'} height={'30px'} />}
      </Button>
   );
});
