// Bookings.test.js

import { initializeTimes, updateTimes } from './Bookings';

describe('initializeTimes function', () => {
    it('returns an empty array', () => {
        expect(initializeTimes()).toEqual([]);
    });
});

describe('updateTimes function', () => {
    it('dispatches correct action', () => {
        const mockDispatch = jest.fn();
        const selectedDate = '2023-05-18';

        updateTimes(mockDispatch, selectedDate);

        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: selectedDate });
    });
});
