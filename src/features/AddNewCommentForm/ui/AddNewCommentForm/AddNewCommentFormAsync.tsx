import { type FC, lazy, Suspense } from 'react';

import { type AddNewCommentFormProps } from './AddNewCommentForm';
export const AddNewCommentFormLazy = lazy<FC<AddNewCommentFormProps>>(
   async () => await import('./AddNewCommentForm'),
);
export const AddNewCommentFormAsync = (props: AddNewCommentFormProps): JSX.Element => {
   return (
      <Suspense fallback={''}>
         <AddNewCommentFormLazy {...props} />
      </Suspense>
   );
};
