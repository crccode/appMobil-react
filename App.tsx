import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentacion/viewa/home/Home';
import { RegisterScreen } from './src/Presentacion/viewa/register/Register';

// DEBEMOS DEFINIR QUE TIPOS DE DATOS VA A RECIBIR LAS PANTALLAS 
export type RootStackParamList = {
    // undifined lo usamos cuando no pasamos datos entre pantallas 
    HomeScreen: undefined,
    RegisterScreen: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer >
        {/* AQUI TENDREMOS EL LLAMADO A LAS PANTALLAS  */}
      <Stack.Navigator 
    //   QUITAMOS EL TOOLBAR 
        screenOptions={ {headerShown: false} }
        >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={ {
            headerShown: true,
            title: 'Nuevo usuario'
        } }
        />

        {/* PANTALLA DE REGISTRO  */}
        <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;