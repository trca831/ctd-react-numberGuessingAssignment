import React, { useState } from "react";
import Button from "./Button";

export default function GuessControl (props){

// const GuessControl = ({onGuess}) => {
  const [currentGuess, setCurrentGuess] = useState('');
  //Check: is onGuess a prop here correctly? Forgot to put {}
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };
  
  const onSubmitGuess = () => {
    //changed event from onGuess and it helped it work
    props.onGuess(Number(currentGuess));
    setCurrentGuess(" ");
  };
  
  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );

}

// export default GuessControl;
