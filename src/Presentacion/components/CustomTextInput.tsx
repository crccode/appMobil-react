import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props  {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onchangeText: (property: string, value: any) => void
}

const CustomTextInput = ( {
    image, 
    placeholder, 
    value, 
    keyboardType, 
    secureTextEntry=false, 
    property, 
    onchangeText } :Props ) => {

    return (
        <View style={styles.formInput}>
            <Image
                source={image}
                style={styles.formIcon}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder= {placeholder}
                keyboardType= {keyboardType}
                
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={text => onchangeText(property, text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'yellow',
        marginLeft: 15
    },
})
export default CustomTextInput
