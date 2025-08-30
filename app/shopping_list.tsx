import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";

export default function ShoppingListApp() {
    const [item, setItem] = useState("");
    const [list, setList] = useState<string[]>([]);

    const addItem = () => {
        if (item.trim() !== "") {
            setList([...list, item.trim()]);
            setItem("");
        }
    };

    const clearList = () => {
        setList([]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={item}
                onChangeText={setItem}
                placeholder="Enter item"
            />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={addItem}>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={clearList}>
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Shopping List</Text>
            <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        marginTop: 40,
        backgroundColor: "silver",
    },
    input: {
        width: 200,
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: "row",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4682b4ff",
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        color: "blue",
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        marginVertical: 4,
    },
});
