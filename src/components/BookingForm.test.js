// Import the necessary libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import the component to be tested
import BookingForm from "./BookingForm";

// Write your test
describe('BookingForm component', () => {
    test('Renders the Header title inside BookingForm', async () => {
        // Mock your data
        const availableTimes = ['10:00', '11:00', '12:00'];
        const updateTimes = jest.fn();

        // Render your component in the test
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);

        // Use screen.getByText to query for the title element
        const titleElement = await screen.findByText(/Reservation/i);

        // Ensure your titleElement is in the document
        expect(titleElement).toBeInTheDocument();
    });
});
