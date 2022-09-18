import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataProvider from './contexts/data';
import Toast from 'react-native-toast-message';

import Cliente from './src/pages/Cliente';
import DetalhesValor from './src/pages/DetalhesValor';
import Maquina from './src/pages/Maquina';
import Origem from './src/pages/Origem';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <DataProvider>
      <Stack.Navigator>
                  
        <Stack.Screen 
        name="Origem" 
        component={Origem} 
        options={{
          title: 'Local',
          headerStyle:{
            backgroundColor: '#121212'
          },

          headerTintColor: '#fff',
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Cliente" 
        component={Cliente} 
        options={{
          title:'Cliente',
          headerShown: false,
        }}
        />

      <Stack.Screen 
        name="Maquina"
        component={Maquina}
        options={{
          headerShown: false,
        }}
        />
         <Stack.Screen 
        name="DetalhesValor"
        component={DetalhesValor}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
      </DataProvider>
      <Toast/>
    </NavigationContainer>
  );
}