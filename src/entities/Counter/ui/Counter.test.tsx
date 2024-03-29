import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Counter } from '..';

describe('Counter.test', () => {
   test('test', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value: 10 } },
      });
      expect(screen.getByTestId('value.Header')).toHaveTextContent('10');
   });
   test('increment', async () => {
      componentRender(<Counter />, {
         initialState: { counter: { value: 10 } },
      });
      await userEvent.click(screen.getByTestId('btn-increment'));
      expect(screen.getByTestId('value.Header')).toHaveTextContent('11');
   });
   test('decrement', async () => {
      componentRender(<Counter />, {
         initialState: { counter: { value: 10 } },
      });
      await userEvent.click(screen.getByTestId('btn-decrement'));
      expect(screen.getByTestId('value.Header')).toHaveTextContent('9');
   });
});
