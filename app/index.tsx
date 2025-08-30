import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return <View style={styles.container}>
    <Text>Week 1</Text>
    <Link href="/calc" style={styles.link}>Calculator</Link>
    <Link href="/guess" style={styles.link}>Guessing game</Link>

    <Text>Week 2</Text>
    <Link href="/calc_history" style={styles.link}>Calculator with history</Link>
    <Link href="/shopping_list" style={styles.link}>Shopping list</Link>
  </View>;
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  link: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5
  }
});