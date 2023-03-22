// import styles from "./GuessMessage.module.css";

// function getMessage(distanceApart, isLow) {
//     const messages = {
//         way: isLow ? "well below" : "well above",
//         little: isLow ? "a little below" : "a little above",
//     };
//     const messageKey = distanceApart > 10 ? "way" : "little";
//     return `"Your guess was ${messages[messageKey]} the number."`;
// }

// function getGuessMessage(guess, numberToGuess) {
//     const distanceApart = Math.abs(numberToGuess - guess);
//     const isLow = guess < numberToGuess;
//     const className = isLow
//         ? distanceApart > 10
//             ? styles.wayLow
//             : styles.littleLow
//         : distanceApart > 10
//         ? styles.wayHigh
//         : styles.littleHigh;
//     const message = getMessage(distanceApart, isLow);
//     return <p className={className}>{message}</p>;
// }

// function GuessMessage({ guess, numberToGuess, numberOfGuesses }) {
//     return (
//         <div>
//             {guess && getGuessMessage(guess, numberToGuess)}
//             <p>Guesses so far: {numberOfGuesses}</p>
//         </div>
//     );
// }

// export default GuessMessage;


function getGuessMessage(guess, numberToGuess) {
  const distanceApart = Math.abs(numberToGuess - guess);
  if (guess < numberToGuess) {
    if (distanceApart > 10) {
      return "Your guess was well below the number.";
    } else {
      return "Your guess was a little below the number.";
    }
  } else {
    if (distanceApart > 10) {
      return "Your guess was well above the number.";
    } else {
      return "Your guess was a little above the number.";
    }
  }
}

function GuessMessage({ guess, numberToGuess, numberOfGuesses }) {
  return (
    <div>
      {guess && <p>{getGuessMessage(guess, numberToGuess)}</p>}
      <p>Guesses so far: {numberOfGuesses}</p>
    </div>
  );
}

export default GuessMessage;
