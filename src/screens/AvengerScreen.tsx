import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avengers } from '../components/Avengers'
import { Form } from '../components/Form'
import { SearchNew } from '../components/SearchNew'

export const AvengerSreen = () => {

    const [character, setCharacter] = useState("");
    const [showForm, setShowForm] = useState(false);

    return (
        <View style={ styles.container }>


            <SearchNew 
                character={character}
                setCharacter={ setCharacter }
                setShowForm= { setShowForm }
            />

            { showForm && 
            
            <Form 
                setShowForm= { setShowForm }
            /> 
            
            }

            <Avengers character={character}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    }
})