import React from "react";
//remove , { Component } from React
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";

function App  () {
  
    return (
      <div className="App">
        <NumberGuessingGame />
      </div>
    );
  }

  //switched from class to function
  //removed word class and word component
  //and the render {}

export default App;
