import { Tab } from '@headlessui/react';
import { memo, type ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleType } from '@/entities/Article';
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

interface ContentType {
   title: string;
   description: string;
   img: string;
}
interface TabI {
   id: string;
   trigger: ReactNode;
   content: ContentType;
}

interface TypesArticleTabsProps {
   className?: string;
}

export const TypesArticleTabs = memo(({ className }: TypesArticleTabsProps) => {
   const errorImage = <Icon className={cls.img} Svg={ErrorImage} width={'100%'} height={'100%'} />;
   const userAuth = useSelector(getUserAuthData);
   const { t } = useTranslation();
   const tabs: TabI[] = useMemo(
      () => [
         {
            id: '1',
            trigger: t('Айти'),
            content: {
               title: ArticleType.IT,
               description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
               img: 'https://st2.depositphotos.com/4021139/7320/i/450/depositphotos_73205685-stock-photo-it-strategy-concept.jpg',
            },
         },
         {
            id: '2',
            trigger: t('Экономика'),
            content: {
               title: ArticleType.ECONOMICS,
               description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing. ut labore et dolore magna aliqua.',
               img: 'https://img.freepik.com/free-vector/flat-design-stock-market-concept_23-2149162443.jpg',
            },
         },
         {
            id: '3',
            trigger: t('Наука'),
            content: {
               title: ArticleType.SCIENCE,
               description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
               img: 'https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713916800&semt=sph',
            },
         },
      ],
      [t],
   );

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
                  {tabs.map((tab) => (
                     <Tab
                        key={tab.id}
                        className={({ selected }) => classNames(cls.title, { [cls.active]: selected }, [])}
                     >
                        {tab.trigger}
                     </Tab>
                  ))}
               </Tab.List>
               <Tab.Panels className={cls.panels}>
                  {tabs.map(({ content }, idx) => (
                     <Tab.Panel key={idx} className={cls.panel}>
                        <VStack gap={'15'} className={cls.info}>
                           <Text title={content.title} size={TextFontSize.L} />
                           <Text text={content.description} />
                           {userAuth && (
                              <AppLink variant={AppLinkVariant.BORDER} to={getRouteArticles()}>
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
