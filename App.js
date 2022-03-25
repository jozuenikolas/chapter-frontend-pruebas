import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MarvelList from "./src/components/marvelList";

export default function App() {
  const [textForSearch, setTextForSearch] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de personajes</Text>
      <View style={{ paddingBottom: 16 }}>
        <TextInput
          style={styles.search}
          value={textForSearch}
          onChangeText={(value) => setTextForSearch(value)}
          placeholder="Buscar"
        />
      </View>
      <MarvelList textForSearch={textForSearch} />
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
  search: {
    backgroundColor: "#fff",
  },
});
