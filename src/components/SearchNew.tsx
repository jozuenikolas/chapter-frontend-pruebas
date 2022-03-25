import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text  } from 'react-native';

interface Props {
    character: string,
    setCharacter: Dispatch<SetStateAction<string>>,
    setShowForm: Dispatch<SetStateAction<boolean>>,
}

export const SearchNew = ({ character, setCharacter, setShowForm }: Props) => {


    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10}}>

            <TextInput
                style={styles.input}
                value={character}
                onChangeText={setCharacter}
                placeholder="Buscar"
            />

            <TouchableOpacity
                activeOpacity= { 0.5 }
                onPress= { () => setShowForm(true)}
                >
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>
                        Nuevo
                    </Text>

                </View>
            </TouchableOpacity>
            
        </View>
    )
        


}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 50,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 8,
        borderColor: '#c5c5c5',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#e61919',
        height: 50,
        width: 100,
        justifyContent: 'center',
        borderRadius: 8,
        padding: 10,
        marginLeft: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
