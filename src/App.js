import './App.css';
import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./scenes/Home";
import Bookings from "./scenes/Bookings";

function App() {
    return (
        <React.Fragment className="App">
            <Header/>
            <Nav/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/bookings" element={<Bookings/>}/>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
