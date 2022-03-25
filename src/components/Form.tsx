import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text  } from 'react-native';

interface Props {
    setShowForm: Dispatch<SetStateAction<boolean>>,
}

export const Form = ({ setShowForm }: Props) => {


    return (
        <View style={styles.container}>

            <Text style={ styles.title }>
                Nuevo Personaje
            </Text>

            <Text style={ styles.text }>
                Nombre
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
            />

            <Text style={ styles.text }>
                Descripcion
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Descripcion"
            />

            <Text style={ styles.text }>
                Imagen
            </Text>

            <TextInput
                style={styles.input}
                placeholder="URL"
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center',}}>

            <TouchableOpacity
                activeOpacity= { 0.5 }
                >
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>
                        Guardar
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity= { 0.5 }
                onPress= { () => setShowForm(false)}
                >
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>
                        Cancelar
                    </Text>

                </View>
            </TouchableOpacity>

            </View>
        </View>

    )
        


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderColor: '#c5c5c5',
        borderWidth: 0.5
    },
    input: {
        height: 50,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 8,
        borderColor: '#c5c5c5',
        backgroundColor: 'white',
        margin: 10,
    },
    button: {
        backgroundColor: '#e61919',
        height: 50,
        width: 120,
        justifyContent: 'center',
        borderRadius: 8,
        padding: 10,
        marginLeft: 15,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    text: {
        color: 'black',
        fontSize: 15,
        margin: 10
    }
})
