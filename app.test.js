// Import the necessary libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import the component to be tested
import BookingForm from "./src/components/BookingForm";

// Write your test
describe('BookingForm component', () => {
    test('Renders the Header title inside BookingForm', () => {
        // Render your component in the test
        render(<BookingForm />);

        // Use screen.getByText to query for the title element
        const titleElement = screen.getByText(/Booking/i);

        // Ensure your titleElement is in the document
        expect(titleElement).toBeInTheDocument();
    });
});
