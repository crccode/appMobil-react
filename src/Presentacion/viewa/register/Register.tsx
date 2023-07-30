import React from 'react'
import { Image, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { View, Text } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';


export const RegisterScreen = () => {
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
            <View style={styles.form}>
                <Text style={styles.formText} >REGISTRARSE</Text>

        
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/user.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Nombres'
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/my_user.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Apellidos'
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/email.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='correo electronico'
                        keyboardType='email-address'
                    />
                </View>
                
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/phone.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Telefono'
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/password.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/confirm_password.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR'
                        onPress={() => { ToastAndroid.show('CLICK here', ToastAndroid.SHORT) }} />
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    // EXPANDE TODOS LOS ELEMENTOS 
    flex: 1,
    backgroundColor: 'black',

},

imageBackground: {
    width: '100%',
    height: '100%',
    bottom: '30%',
    opacity: 0.6
},

// ESTILOS PARA EL FORMULARIO
form: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // APLICA EL PADING A TODOS LOS ELEMENTOS QUE ESTAN DENTRO
    padding: 20
},
formText: {
    fontWeight: 'bold',
    fontSize: 16,
},
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

// ESTILOS PARA EL LOGO
logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center'
},

logoImage: {
    width: 100,
    height: 100,
},

logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
},
// FORMULARIO REGISTRO
formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
},
formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
},


});


