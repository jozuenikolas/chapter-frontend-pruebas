import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MarvelList from "./src/components/marvelList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de personajes</Text>
      <MarvelList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#F6F7F7",
  },
  title: {
    color: "#999999",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },
});
