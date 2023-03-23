import Button from "./Button";
// import NumberGuessingGame from "./NumberGuessingGame";

function GameOver({ hasWon, onReset, numberToGuess }) {
  //the () => () is new for onClick
  return (
    <div>
      
      {hasWon && <h2>Congratulation! You guessed my number.</h2>}
      {!hasWon && (
        <h2>You didn't guess my number. Would you like to try again?</h2>
      )}
      {/* <Button onClick={() => onReset()}>Play Again!</Button> */}
      {/* removed  () => ... () */}
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

export default GameOver;
