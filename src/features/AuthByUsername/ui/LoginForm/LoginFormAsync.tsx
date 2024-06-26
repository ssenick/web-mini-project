import { type FC, lazy, Suspense } from 'react';

import { LoaderPoints } from '@/shared/ui/LoaderPoints/LoaderPoints';

import { type LoginFormProps } from './LoginForm';
export const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'));

export const LoginFormAsync = ({ ...props }): JSX.Element => {
   return (
      <Suspense
         fallback={
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
               <LoaderPoints />
            </div>
         }
      >
         <LoginFormLazy {...props} />
      </Suspense>
   );
};
