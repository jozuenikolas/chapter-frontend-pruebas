import React from "react"
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import { Character } from "./character/character"

export const CharacterList = (props: any) => {

    const { characters } = props

    const renderItem = ({ item }: any) => (
        <Character character={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={(item: any) => item._id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});
