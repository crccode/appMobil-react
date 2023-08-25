import React from 'react'
import { Image, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { View, Text } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';

import styles from './Style'
import { ScrollView } from 'react-native';
export const RegisterScreen = () => {
    const {name, lastname,phone,email,password,confirmPassword,onChange,register} = useViewModel();
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
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>
                    Selecciona una imagen
                </Text>
            </View>
            {/* // FORMULARIO  */}
            <ScrollView>
                <View style={styles.form}>
                    <Text style={styles.formText} >REGISTRARSE</Text>

                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Nombres'
                        keyboardType = 'default'
                        property= 'name'
                        onchangeText={onChange}
                        value={name}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/my_user.png')}
                        placeholder='Apellidos'
                        keyboardType = 'default'
                        property= 'lastname'
                        onchangeText={onChange}
                        value={lastname}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/email.png')}
                        placeholder='correo electronico'
                        keyboardType = 'email-address'
                        property= 'email'
                        onchangeText={onChange}
                        value={email}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/phone.png')}
                        placeholder='Telefono'
                        keyboardType = 'numeric'
                        property= 'phone'
                        onchangeText={onChange}
                        value={phone}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/password.png')}
                        placeholder='contraseña'
                        keyboardType = 'default'
                        secureTextEntry={true}
                        property= 'password'
                        onchangeText={onChange}
                        value={password}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/confirm_password.png')}
                        placeholder='Confirmar contraseña'
                        keyboardType = 'default'
                        secureTextEntry={true}
                        property= 'confirmPassword'
                        onchangeText={onChange}
                        value={confirmPassword}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR'
                            onPress={() => { 
                                register()
                            }} />
                    </View>


                </View>
            </ScrollView>
           
        </View>
    );
}



