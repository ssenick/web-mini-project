import { useTranslation } from 'react-i18next';

import { Slider } from '@/features/PreviewSlider';
import { Page } from '@/widgets/Page';

const HomePage = (): JSX.Element => {
   const { t } = useTranslation('home');

   return (
      <Page data-testid={'HomePage'} title={t('Заголовок страницы')}>
         <Slider />
      </Page>
   );
};

export default HomePage;
