import React, { useEffect, useState } from "react"
import { Modal, StyleSheet, Text, TextInput, Pressable, View, Alert } from "react-native"
import { createCaracter } from "../../api/marvel.api"

interface CreateCharacterType {
    showModal: boolean
    setModalVisible: any
}
export const CreateCharacter = (props: CreateCharacterType) => {
    const { showModal, setModalVisible } = props
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (name && description && image) {
            setIsDisabled(false)
        }
    }, [name, description, image])

    const _onSaveCharacter = async () => {
        
        try {
            const currentDate = new Date().toISOString();
            const body = {
                title: name,
                body: description,
                image: image,
                category: 'main',
                idAuthor: 9,
                createdAt: currentDate,
                updatedAt: currentDate
            }
            console.log('body => ', body)
            const response = await createCaracter(body)
            alert(response);
        } catch (err) {
            alert('Ha habido un error al guardar');
        } finally {
            setModalVisible(!showModal)
            cleanForm()
        }
    }

    const _onCancel = () => {
        cleanForm()
        setModalVisible(!showModal)
    }

    /**
     * Clean inputs
     */
    const cleanForm = () => {
        setName('')
        setDescription('')
        setImage('')
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Nuevo Personaje</Text>
                        <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='Nombre'></TextInput>
                        <TextInput value={description} onChangeText={setDescription} style={styles.input} placeholder='Descripción'></TextInput>
                        <TextInput value={image} onChangeText={setImage} style={styles.input} placeholder='Imagen'></TextInput>
                        <Pressable
                            disabled={isDisabled}
                            style={isDisabled ? [styles.buttonDisabled, styles.button] : [styles.buttonActive, styles.button]}
                            onPress={_onSaveCharacter}
                        >
                            <Text style={styles.textStyle}>Guardar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonActive, styles.marginButton]}
                            onPress={_onCancel}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,

    },
    buttonActive: {
        backgroundColor: '#F30020'
    },
    buttonDisabled: {
        opacity: 60,
        backgroundColor: 'gray'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    marginButton: {
        marginTop: 10
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4
    },
});
