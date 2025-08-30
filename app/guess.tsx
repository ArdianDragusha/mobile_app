import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function GuessingGame() {

    const [gameOn, setGameOn] = useState(false); // Whether the game is active
    const [correct, setCorrect] = useState(0);  // The correct answer
    const [guesses, setGuesses] = useState(0);  // Number of guesses made
    const [input, setInput] = useState("");     // User input
    const [message, setMessage] = useState(""); // Feedback message

    function newGame() {
        const random = 1 + Math.floor(Math.random() * 100);
        console.log("Correct answer is " + random);

        setCorrect(random);
        setGuesses(0);
        setInput("");
        setMessage("");
        setGameOn(true);
    }

    function makeGuess() {
        debugger
        const guess = +input;

        if (isNaN(guess)) {
            setMessage("Please enter a valid number.");
            return;
        }

        setGuesses(guesses + 1);

        if (guess === correct) {
            // fixme: wrong number of guesses shown
            setMessage(`Correct! It took you ${guesses} guesses.`);
            setGameOn(false);
        } else {
            setMessage(guess < correct ? "Higher!" : "Lower!");
        }
    }

    useEffect(() => newGame(), []);

    return <View style={styles.container}>

        <TextInput
            style={styles.input}
            value={input} onChangeText={setInput}
            keyboardType="numeric"
            placeholder="Guess a number between 1-100!"
            editable={gameOn}
        />

        <Button title="Guess!" onPress={makeGuess} disabled={!gameOn} />
        <Button title="Start a new game" onPress={newGame} />

        <Text>Guesses: {guesses}</Text>
        <Text>{message}</Text>

    </View>;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "silver",
        padding: 10,
        gap: 10,
        justifyContent: "center",
        flex: 1
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white"
    }
});