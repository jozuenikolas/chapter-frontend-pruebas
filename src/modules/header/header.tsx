import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { CreateCharacter } from './create-character'

export const Header = (props: any) => {

    const { modalVisible, setModalVisible } = props

    const _onNewCharacter = () => {
        // opens up a modal
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Personajes</Text>
            <TextInput style={styles.input} placeholder='Buscar'></TextInput>
            <View style={styles.button}>
                <Button
                    onPress={_onNewCharacter}
                    title="Nuevo"
                    color="white"
                />
            </View>
            <CreateCharacter showModal={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F30020',
        borderRadius: 4,

    },
    container: {
        margin: 12
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,

    },
    title: {
        color: '#78787A',
        fontSize: 20
    }
});
