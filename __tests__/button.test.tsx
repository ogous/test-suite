import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '@/components/button';

describe('CustomButton', () => {
    it('renders a button that calls a function', () => {
        render(<CustomButton />);

        const button = screen.getByTestId('custom-button'); // Replace 'your-button-test-id' with the actual value of your data-test attribute

        // Click the button
        fireEvent.click(button);
      
     
        expect(button).toHaveTextContent('8')
    });
});
