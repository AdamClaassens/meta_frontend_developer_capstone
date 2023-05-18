import React from 'react';
import {render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

// Mock the utils
jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

describe('BookingForm component', () => {
    let availableTimes;
    let updateTimes;
    let submitForm;

    beforeEach(() => {
        // Mock your data and functions before each test
        availableTimes = ['10:00', '11:00', '12:00'];
        updateTimes = jest.fn();
        submitForm = jest.fn();
    });

    test('renders the Header title inside BookingForm', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const titleElement = await screen.findByText(/Reservation/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders Booking Information subheader', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const subHeaderElement = await screen.findByText(/Booking Information/i);
        expect(subHeaderElement).toBeInTheDocument();
    });

    test('renders Client Information subheader', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const subHeaderElement = await screen.findByText(/Client Information/i);
        expect(subHeaderElement).toBeInTheDocument();
    });

    test('Validates correct date input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/Booking Date/i), new Date());

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const firstNameInput = screen.getByLabelText(/Booking Date/i);
            const errorMessage = screen.queryByText('Date Required');
            expect(firstNameInput).not.toContainElement(errorMessage);
        });
    });

    test('Validates incorrect date input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Booking Date/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            expect(screen.getByText(/Date Required/i)).toBeInTheDocument();
        });
    });

    test('Validates correct first name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/First Name/i), 'John');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const firstNameInput = screen.getByLabelText(/First Name/i);
            const errorMessage = screen.queryByText('required');
            expect(firstNameInput).not.toContainElement(errorMessage);
        });
    });

    test('Validates incorrect first name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/First Name/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            expect(screen.getByText(/First Name Required/i)).toBeInTheDocument();
        });
    });


});
