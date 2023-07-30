import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// PARA PASAR PARAMETROS DE FORMA DINAMICA USAMOS INTERFACE
interface Props {
    text: string
}
export const RoundedButton = ( {text}: Props ) => {
  return (
    // Funciona como un boton el cual podre asignarle estilos 
    <TouchableOpacity 
        style= {styles.roundedButton}
        onPress={ () => {} }
    >
        <Text style= {styles.textButton}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15 ,        
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})