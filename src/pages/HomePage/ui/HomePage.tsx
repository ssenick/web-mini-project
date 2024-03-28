import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Page } from '@/widgets/Page';

const HomePage = memo((): JSX.Element => {
   const { t } = useTranslation('home');
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Page data-testid={'HomePage'} title={t('Заголовок страницы')}>
         <div>
            <Counter />
            <Button
               variant={ButtonVariant.BACKGROUND}
               onClick={() => {
                  setIsOpen(true);
               }}
            >
               ===+===
            </Button>
            <Drawer
               isOpen={isOpen}
               onClose={() => {
                  setIsOpen(false);
               }}
            >
               11111
            </Drawer>
            <StarRating />
            {/* <ToggleFeatures */}
            {/*    feature={'isAppRedesigned'} */}
            {/*    on={<Rating title={t('Заголовок страницы')} feedbackTitle={'спасибо'} hasFeedback />} */}
            {/*    off={<Counter />} */}
            {/* /> */}
         </div>
      </Page>
   );
});

export default HomePage;
