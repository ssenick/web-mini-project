import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppLink } from './AppLink';

describe('AppLink.test', () => {
   test('render', () => {
      componentRender(<AppLink to={'/'}>{'text'}</AppLink>, {});
      expect(screen.getByText('text')).toBeInTheDocument();
   });
});
