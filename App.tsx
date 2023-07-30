import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/components/viewa/home/Home';

const Stack = createNativeStackNavigator();

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
  
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;