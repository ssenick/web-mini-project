import { Tab } from '@headlessui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { type ArticleType } from '@/entities/Article';
import { useGetTopicsListQuery } from '@/entities/Topics';
import { getUserAuthData } from '@/entities/User';
import ErrorImage from '@/shared/assets/icons/errorImage.svg';
import { getRouteArticles } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextFontSize } from '@/shared/ui/Text/Text';

import cls from './TypesArticleTabs.module.scss';

interface TypesArticleTabsProps {
   className?: string;
}

export const TypesArticleTabs = memo(({ className }: TypesArticleTabsProps) => {
   const { t } = useTranslation();
   const userAuth = useSelector(getUserAuthData);
   const { error, isLoading, data: topics } = useGetTopicsListQuery(null);
   const errorImage = <Icon className={cls.img} Svg={ErrorImage} width={'100%'} height={'100%'} />;
   const triggers: ArticleType[] = [t('Айти'), t('Экономика'), t('Наука')];

   if (error) {
      return (
         <div className={classNames(cls.TypesArticleTabs, {}, [className])}>
            <Text title={t('что-то пошло не так')} texAlign={TextAlign.CENTER} />
         </div>
      );
   }
   if (isLoading) {
      return (
         <VStack gap={'25'} className={classNames(cls.TypesArticleTabs, {}, [className])}>
            <Skeleton inverse className={cls.text} border={'5px'} width={'100%'} height={'115px'} />
            <div className={classNames(cls.ContentTabs, {}, [className])}>
               <div className={cls.list}>
                  <Skeleton inverse border={'5px'} width={'33%'} height={'34px'} />
                  <Skeleton inverse border={'5px'} width={'33%'} height={'34px'} />
                  <Skeleton inverse border={'5px'} width={'33%'} height={'34px'} />
               </div>
               <div className={cls.skeletonPanels}>
                  <Skeleton inverse border={'5px'} width={'100%'} height={'184px'} />
               </div>
            </div>
         </VStack>
      );
   }

   return (
      <VStack gap={'25'} className={classNames(cls.TypesArticleTabs, {}, [className])}>
         <Text
            className={cls.text}
            texAlign={TextAlign.CENTER}
            title={t('Main topics in articles')}
            size={TextFontSize.XL}
            text={t(
               'Here you can find topics from these categories, in the future there will only be more and more topics',
            )}
         />
         <div className={classNames(cls.ContentTabs, {}, [className])}>
            <Tab.Group>
               <Tab.List className={cls.list}>
                  {triggers.map((trigger) => (
                     <Tab
                        key={trigger}
                        className={({ selected }) => classNames(cls.title, { [cls.active]: selected }, [])}
                     >
                        {trigger}
                     </Tab>
                  ))}
               </Tab.List>
               <Tab.Panels className={cls.panels}>
                  {topics?.map(({ content }, idx) => (
                     <Tab.Panel key={idx} className={cls.panel}>
                        <VStack gap={'15'} className={cls.info}>
                           <Text title={content.title} size={TextFontSize.L} />
                           <Text text={content.description} />
                           {userAuth && (
                              <AppLink
                                 className={cls.link}
                                 variant={AppLinkVariant.BORDER}
                                 to={getRouteArticles()}
                              >
                                 {t('Перейти к статьям')}
                              </AppLink>
                           )}
                        </VStack>
                        <div className={cls.image}>
                           <AppImage
                              src={content.img}
                              className={cls.img}
                              alt={'article image'}
                              errorFallback={errorImage}
                              fallback={<Skeleton className={cls.img} width={'100%'} height={'100%'} />}
                           />
                        </div>
                     </Tab.Panel>
                  ))}
               </Tab.Panels>
            </Tab.Group>
         </div>
      </VStack>
   );
});
