import { useTranslation } from 'react-i18next';

import { Slider } from '@/features/PreviewSlider';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

import { InfoMassage } from '../InfoMassage/InfoMassage';
import { TypesArticleTabs } from '../TypesArticleTabs/TypesArticleTabs';

const HomePage = (): JSX.Element => {
   const { t } = useTranslation('home');

   return (
      <Page data-testid={'HomePage'} arrowUp scrollTrigger>
         <VStack gap={'30'}>
            <InfoMassage />
            <Text
               title={t('главный заголовок домашней страницы')}
               text={t('подзаголовок клавной страницы')}
               size={TextFontSize.XL}
            />
            <Slider />
            <Text title={t('второй заголовок домашней страницы')} size={TextFontSize.L} />
            <TypesArticleTabs />
         </VStack>
      </Page>
   );
};

export default HomePage;
