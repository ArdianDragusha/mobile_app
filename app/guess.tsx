import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from "react-native";

export default function Index() {
    const [correctNum, setCorrectNum] = useState(Math.floor(Math.random() * 100) + 1);
    const [num, setNum] = useState("");
    const [feedback, setFeedback] = useState("");
    const [guessCount, setGuessCount] = useState(0);

    const handleGuess = () => {
        const parsedNum = parseInt(num, 10);

        if (isNaN(parsedNum)) {
            Alert.alert("Invalid input", "Please enter numbers only.");
            return;
        }

        setGuessCount(guessCount + 1);

        if (parsedNum < correctNum) {
            setFeedback("Too low");
        } else if (parsedNum > correctNum) {
            setFeedback("Too high");
        } else {
            Alert.alert("Correct!", `You guessed correctly in ${guessCount + 1} attempts.`);
            setFeedback("Correct!");
            setCorrectNum(Math.floor(Math.random() * 100) + 1);
            setGuessCount(0);
        }

        setNum("");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Guessing Game</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your guess"
                    value={num}
                    onChangeText={setNum}
                />
                <Button title="Guess" onPress={handleGuess} />
                {feedback !== "" && <Text style={styles.feedback}>{feedback}</Text>}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "silver",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        width: "80%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    feedback: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 16,
    },
});