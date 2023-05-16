import React, {useReducer, useState} from "react";
import BookingForm from "../components/BookingForm";
import dayjs from "dayjs";

const Bookings = () => {
    // Step 1: Lift state up to the Main component
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

    // Define the reducer function for availableTimes state
    function availableTimesReducer(state, action) {
        // Handle state changes based on the action type
        switch (action.type) {
            case 'UPDATE_TIMES':
                // Perform logic to update available times based on selected date
                // For now, let's assume the times are hardcoded
                const selectedDate = action.payload;
                const availableTimes = [
                    '10:00 AM',
                    '11:00 AM',
                    '12:00 PM',
                    '01:00 PM',
                    '02:00 PM',
                    '03:00 PM',
                ];
                return availableTimes;
            default:
                return state;
        }
    }

    // Step 2: Function to update availableTimes state based on selected date
    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    // Function to initialize availableTimes
    const initializeTimes = () => {
        // Perform logic to initialize availableTimes
        // For now, let's assume it's an empty array
        return [];
    };

    // Call initializeTimes on component mount to initialize availableTimes
    React.useEffect(() => {
        const initialTimes = initializeTimes();
        dispatch({ type: 'UPDATE_TIMES', payload: initialTimes });
    }, []);

    return (
        <section>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
        </section>
    )
}



export default Bookings