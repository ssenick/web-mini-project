import { memo } from 'react';

import { faqReducer } from '@/entities/FAQ';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { FaqHeader } from '../FaqHeader/FaqHeader';
import { FaqList } from '../FaqList/FaqList';

const reducers: ReducersList = {
   faq: faqReducer,
};

const FaqPage = memo((): JSX.Element => {
   return (
      <Page data-testid={'FaqPage'}>
         <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap={'30'}>
               <FaqHeader />
               <FaqList />
            </VStack>
         </DynamicModuleLoader>
      </Page>
   );
});

export default FaqPage;
