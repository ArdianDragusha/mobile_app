import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState("");

    const formatNumberForDisplay = (n: number) => {
        return Number.isInteger(n) ? n.toString() : n.toFixed(2);
    };


    const handleOperation = (op: "+" | "-") => {
        const n1 = parseFloat(num1.replace(",", "."));
        const n2 = parseFloat(num2.replace(",", "."));
        if (isNaN(n1) || isNaN(n2)) {
            setError("Only numbers");
            setResult(null);
            return;
        }
        setError("");
        const res = op === "+" ? n1 + n2 : n1 - n2;
        setResult(res);
        const entry = `${formatNumberForDisplay(n1)} ${op} ${formatNumberForDisplay(n2)} = ${formatNumberForDisplay(res)}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.result}>
                {error ? error : result !== null ? `Result: ${formatNumberForDisplay(result)}` : ""}
            </Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
                placeholder="First number"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
                placeholder="Second number"
                placeholderTextColor="#888"
            />
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOperation("+")}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOperation("-")}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
          
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "silver",
    },
    result: {
        fontSize: 20,
        marginBottom: 10,
        minHeight: 28,
    },
    input: {
        width: 200,
        height: 35,
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 8,
        fontSize: 18,
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 10,
        gap: 16,
    },
    button: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
    },
  
});
