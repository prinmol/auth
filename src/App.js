import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import AuthReg from "./Components/AuthReg/AuthReg";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
       <AuthReg/>
      <Footer/>

    </div>
  );
}

export default App;
