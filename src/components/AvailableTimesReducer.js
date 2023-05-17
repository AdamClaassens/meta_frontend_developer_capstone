// Define the reducer function for availableTimes state
const AvailableTimesReducer = (state, action) => {
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

export default AvailableTimesReducer