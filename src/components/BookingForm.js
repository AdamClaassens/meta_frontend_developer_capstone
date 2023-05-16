import Box from "@mui/material/Box";
import Header from "./Header";
import {Formik} from "formik";
import SubHeader from "./SubHeader";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, MobileDateTimePicker} from "@mui/x-date-pickers";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    Select,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import restaurant from "../assets/restaurant.jpg";
import restaurantChefB from "../assets/restaurant chef B.jpg";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import * as yup from "yup";

const BookingForm = ({availableTimes, updateTimes}) => {

    const marks = [
        {
            value: 2,
            label: 2,
        },
        {
            value: 4,
            label: 4,
        },
        {
            value: 6,
            label: 6,
        },
        {
            value: 8,
            label: 8,
        },
        {
            value: 10,
            label: 10,
        },
        {
            value: 12,
            label: 12,
        },
        {
            value: 14,
            label: 14,
        },
        {
            value: 16,
            label: 16,
        },
    ];

    const handleFormSubmit = async (values, {resetForm}) => {
        // Call postData and wait for its completion
        console.log(values);

        // Reset the form fields after the submission is complete
        resetForm();
    };

    return (
        <section>
            <Box
                display="grid"
                gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(1, 1fr)"}}
                alignItems="top"
                gap="20px"
                sx={{
                    paddingTop: "20px",
                    paddingLeft: {xs: "0px", md: "300px"},
                    paddingRight: {xs: "0px", md: "300px"},
                    backgroundColor: "#495E57"
                }}
            >
                <Box
                    gridColumn="span 1"
                    textAlign="center"
                >
                    <Header title="Booking" subtitle="Little Lemon Booking Form"/>
                </Box>
            </Box>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      setFieldValue
                  }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Booking Information */}
                        <Box
                            display="grid"
                            gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                            alignItems="top"
                            gap="20px"
                            sx={{
                                paddingTop: "20px",
                                paddingLeft: {xs: "0px", md: "300px"},
                                paddingRight: {xs: "0px", md: "300px"},
                            }}
                        >
                            <Box
                                gridColumn="span 12"
                                gridRow="1"
                                textAlign="center"
                            >
                                <SubHeader title="Booking Information"/>
                            </Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Box
                                    gridColumn="span 3"
                                    gridRow="2"
                                >
                                    <DatePicker
                                        label="Date"
                                        type="date"
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {
                                            if (newValue !== null) {
                                                setFieldValue('bookingDate', newValue.$d);
                                                updateTimes(newValue.$d);
                                            }
                                        }}
                                        value={values.bookingDate}
                                        name="bookingDate"
                                        error={!!touched.bookingDate && !!errors.bookingDate}
                                        helperText={touched.bookingDate && errors.bookingDate}
                                    />
                                </Box>
                            </LocalizationProvider>
                            <Box
                                gridColumn="span 3"
                                gridRow="2"
                            >
                                <TextField
                                    fullWidth
                                    name="bookingTime"
                                    select
                                    label="Time"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.bookingTime}
                                    error={!!touched.bookingTime && !!errors.bookingTime}
                                    helperText={touched.bookingTime && errors.bookingTime}
                                >
                                    {availableTimes.map((time) => (
                                        <MenuItem key={time} value={time}>{time}</MenuItem>
                                    ))}
                                </TextField>
                                {/*<FormControl fullWidth>*/}
                                {/*    <InputLabel id="timeLabel">Time</InputLabel>*/}
                                {/*    <Select*/}
                                {/*        labelId="timeLabel"*/}
                                {/*        id="time"*/}
                                {/*        name="time"*/}
                                {/*        label="Time"*/}
                                {/*        onBlur={handleBlur}*/}
                                {/*        onChange={handleChange && console.log(values.time)}*/}
                                {/*        value={values.time}*/}
                                {/*        error={!!touched.time && !!errors.time}*/}
                                {/*        helperText={touched.time && errors.time}*/}
                                {/*    >*/}
                                {/*        <MenuItem value={10}>Ten</MenuItem>*/}
                                {/*        <MenuItem value={20}>Twenty</MenuItem>*/}
                                {/*        <MenuItem value={30}>Thirty</MenuItem>*/}
                                {/*    </Select>*/}
                                {/*</FormControl>*/}
                            </Box>
                            <Box
                                position="relative"
                                gridColumn="span 6"
                                gridRow={{xs: "6", md: "2 / 5"}} // Allows Image to span 4 rows
                            >
                                <img src={restaurant} width="500px"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <Typography
                                    variant="p"
                                >
                                    Number of Guests
                                </Typography>
                                <Slider
                                    label="Number of Guests"
                                    type="number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.numberOfGuests}
                                    name="numberOfGuests"
                                    valueLabelDisplay="auto"
                                    step={2}
                                    marks={marks}
                                    min={2}
                                    max={16}
                                />
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <FormControlLabel
                                    control={<Checkbox/>}
                                    label="Smoking or Non-Smoking?"
                                    name="smoking"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.smoking}
                                />
                            </Box>
                        </Box>

                        {/* Personal Information */}
                        <Box
                            display="grid"
                            gridTemplateColumns={{xs: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}}
                            alignItems="top"
                            gap="20px"
                            sx={{
                                paddingTop: "20px",
                                paddingLeft: {xs: "0px", md: "300px"},
                                paddingRight: {xs: "0px", md: "300px"},
                            }}
                        >
                            <Box
                                gridColumn="span 12"
                                gridRow="1"
                                textAlign="center"
                            >
                                <SubHeader title="Client Information"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                                gridRow="2"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.first_name}
                                    name="first_name"
                                    error={!!touched.first_name && !!errors.first_name}
                                    helperText={touched.first_name && errors.first_name}
                                />
                            </Box>
                            <Box
                                position="relative"
                                gridColumn="span 6"
                                gridRow={{xs: "6", md: "2 / 5"}} // Allows Image to span 4 rows
                            >
                                <img src={restaurantChefB} width="500px"/>
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.last_name}
                                    name="last_name"
                                    error={!!touched.last_name && !!errors.last_name}
                                    helperText={touched.last_name && errors.last_name}
                                />
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.number}
                                    name="number"
                                    error={!!touched.number && !!errors.number}
                                    helperText={touched.number && errors.number}
                                />
                            </Box>
                            <Box
                                gridColumn="span 6"
                            >
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>

                        </Box>

                        <Box
                            display="flex"
                            justifyContent="center"
                            mt="20px"
                            paddingBottom="20px"
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    borderRadius: "16px",
                                    color: "#333333",
                                    backgroundColor: "#F4CE14",
                                    fontFamily: "Karla",
                                    fontWeight: "bold",
                                    textTransform: "none" // Remove all Caps from MUI Button
                                }}
                            >
                                Reserve Table
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </section>
    )
}
const checkoutSchema = yup.object().shape({
    bookingDate: yup.string().required("required"),
    bookingTime: yup.string().required("required"),
    first_name: yup.string().required("required"),
    last_name: yup.string().required("required"),
    number: yup
        .string()
        .matches(
            /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
            "Phone number is not valid"
        )
        .required("required"),
    email: yup.string().email("invalid email").required("required"),

});
const initialValues = {
    bookingDate: "",
    bookingTime: "",
    numberOfGuests: 2,
    smoking: false,
    first_name: "",
    last_name: "",
    number: "",
    email: "",
};

export default BookingForm