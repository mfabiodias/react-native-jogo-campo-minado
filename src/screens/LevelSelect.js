import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} 
            animationType='slide' transparent={true} >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.onLevelSelected(0.03)} >
                        <Text style={[styles.buttonLabel, styles.bgEasy]}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.onLevelSelected(0.05)} >
                        <Text style={[styles.buttonLabel, styles.bgNormal]}>Intermediário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.onLevelSelected(0.1)} >
                        <Text style={[styles.buttonLabel, styles.bgHard]}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({

    frame: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        color: '#FFF',
        borderRadius: 10,
        minWidth: 180,
        textAlign:'center',
        overflow: "hidden"
    },
    bgEasy: {
        backgroundColor: '#49B65D',
    },
    bgNormal: {
        backgroundColor: '#2765F7',
    },
    bgHard: {
        backgroundColor: '#F26337',
    },
})