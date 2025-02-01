import { useState } from "react";
import words from "./wordList.json";

function App() {
  // update the app state with a random word each time the page is reloaded
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  // initialize state with empty array of strings to keep track of guessed letters
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return <div></div>
}

export default App
