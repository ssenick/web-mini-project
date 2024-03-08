import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input.test', () => {
   test('test render', () => {
      render(<Input />);
      expect(screen.getByTestId('input')).toBeInTheDocument();
   });
   test('test types number and added placeholder', () => {
      render(<Input type="number" placeholder="test" />);
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByTestId('input')).toHaveAttribute('type', 'number');
      expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'test');
   });
   test('test to toggle class in focus element', () => {
      render(<Input />);
      expect(screen.getByTestId('input')).toBeInTheDocument();
      expect(screen.getByTestId('input-wrapper')).toBeInTheDocument();
      fireEvent.focus(screen.getByTestId('input'));
      expect(screen.getByTestId('input-wrapper')).toHaveClass('isFocus');
      fireEvent.blur(screen.getByTestId('input'));
      expect(screen.getByTestId('input-wrapper')).not.toHaveClass('isFocus');
   });
});
