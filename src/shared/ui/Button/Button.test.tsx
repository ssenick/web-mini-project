import { render, screen } from '@testing-library/react';

import { Button, ButtonVariant } from './Button';

describe('Button', () => {
   test('Test render', () => {
      render(<Button>TEST</Button>);
      expect(screen.getByText('TEST')).toBeInTheDocument();
   });
   test('test theme clean', () => {
      render(<Button variant={ButtonVariant.CLEAN}>TEST</Button>);
      expect(screen.getByText('TEST')).toHaveClass('clean');
   });
});
