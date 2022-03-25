import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export const Character = ({ character }: any) => {
    const { title, image } = character
    return (
        <View style={styles.item}>
            <Image
                style={{
                    alignSelf: 'center',
                    width: 250,
                    height: 300,
                    margin: 10,
                    flex: 1
                }}
                source={{
                    uri: image,
                }} />
            <Text style={styles.bottom}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#151515',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    bottom: {
        color: '#ECEFE3',
        fontSize: 12,
    },
});
