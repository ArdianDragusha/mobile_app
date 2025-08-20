import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function GuessingGame() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1-100");
  const [guesses, setGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Enter a number between 1 and 100");
      return;
    }
    setGuesses(guesses + 1);
    if (num < target) {
      setMessage(`Your guess ${num} is too low`);
    } else if (num > target) {
      setMessage(`Your guess ${num} is too high`);
    } else {
      setMessage(`You guessed the number in ${guesses + 1} tries.`);
      setGameOver(true);
    }
    setGuess("");
  };

  const handleRestart = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Guess a number between 1-100");
    setGuesses(0);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {!gameOver && (
        <>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={guess}
            onChangeText={setGuess}
          />
          <TouchableOpacity style={styles.button} onPress={handleGuess}>
            <Text>MAKE GUESS</Text>
          </TouchableOpacity>
        </>
      )}
      {gameOver && (
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text>PLAY AGAIN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
    color: "black",
    minHeight: 28,
    textAlign: "center",
  },
  input: {
    width: 100,
    height: 35,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 8,
  },
});
