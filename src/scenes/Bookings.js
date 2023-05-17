import React, {useReducer, useState} from "react";
import BookingForm from "../components/BookingForm";
import AvailableTimesReducer from "../components/AvailableTimesReducer";
import dayjs from "dayjs";

// Step 2: Function to update availableTimes state based on selected date
export const updateTimes = (dispatch, selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
};

// Function to initialize availableTimes
export const initializeTimes = () => {
    // Perform logic to initialize availableTimes
    // For now, let's assume it's an empty array
    return [];
};

const Bookings = () => {
    // Step 1: Lift state up to the Main component
    const [availableTimes, dispatch] = useReducer(AvailableTimesReducer, []);

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