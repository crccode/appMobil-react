import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
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
        height: '72%',
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
export default RegisterStyles;
    
    
    