import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { ToastAndroid } from 'react-native';
import { StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import { useState } from 'react';
import useViewModel from './ViewModel'
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Style'
export const HomeScreen = () => {
    // DES ESTRUCTURAMOS LOS VALORES
   const {email, password, onChange}= useViewModel();

    // USAREMOS EL HOOKS DE NAVIGATION
    const navigation = useNavigation <StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            {/* // IMAGEN DE FONDO */}
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground}
            />
            {/* // LOGO */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>
                    Food App
                </Text>
            </View>
            {/* // FORMULARIO  */}
            <View style={styles.form}>
                <Text style={styles.formText} >INGRESAR</Text>
                {/* COMPONENTES PERSONALIZADOS  */}
                <CustomTextInput
                    image= {require('../../../../assets/email.png')}
                    placeholder='correo electronico'
                    keyboardType='email-address'
                    property='email'
                    onchangeText={ onChange}
                    value={email}
                />

                <CustomTextInput
                    image= {require('../../../../assets/password.png')}
                    placeholder='contraseña'
                    keyboardType='default'
                    property='password'
                    onchangeText={ onChange}
                    value={password}
                    secureTextEntry={true}
                />
              

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ENTRAR'
                        onPress={() => { 
                            ToastAndroid.show('CLICK here', ToastAndroid.SHORT) 
                        }} />
                </View>

                <View style={styles.formRegister}>
                    {/* PARA USAR EL ONCLINK DEBEMOS USAR TOUCHOPACITY  */}
                    <Text>No tienes cuenta</Text>
                    <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </View>
    );
}

