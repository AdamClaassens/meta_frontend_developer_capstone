import './App.css';
import React from "react"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment className="App">
        <Header/>
        <Nav/>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
