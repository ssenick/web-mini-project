import { useTranslation } from 'react-i18next';

import { Slider } from '@/features/PreviewSlider';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { TypesArticleTabs } from '../TypesArticleTabs/TypesArticleTabs';

const HomePage = (): JSX.Element => {
   const { t } = useTranslation('home');

   return (
      <Page data-testid={'HomePage'} title={t('Заголовок страницы')}>
         <VStack gap={'30'}>
            <Slider />
            <TypesArticleTabs />
         </VStack>
      </Page>
   );
};

export default HomePage;
