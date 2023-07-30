import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../RoundedButton';
import { ToastAndroid } from 'react-native';
import { StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
export const HomeScreen = () => {
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

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='ENTRAR'
                        onPress={() => { ToastAndroid.show('CLICK here', ToastAndroid.SHORT) }} />
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
    height: '40%',
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
    top: '20%'
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


