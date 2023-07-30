import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'

// PARA PASAR PARAMETROS DE FORMA DINAMICA USAMOS INTERFACE
interface Props {
    text: string,
    onPress: () => void,
}
export const RoundedButton = ( {text, onPress}: Props ) => {
  return (
    // Funciona como un boton el cual podre asignarle estilos 
    <TouchableOpacity 
        style= {styles.roundedButton}
        onPress={ () => onPress() }
    >
        <Text style= {styles.textButton}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

// ESTILOS PARA EL COMPONENTE
const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 40,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15 ,        
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})