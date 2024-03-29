import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import Home from './src/screens/Home';
import Imitacao from './src/screens/Imitacao';
import Conversa from './src/screens/Conversa';
import Curiosidade from './src/screens/Curiosidade';
import Piada from './src/screens/Piada';
import Mapa from './src/screens/Mapa';
import Colorconfig from './src/screens/Colorconfig';
import Clima from './src/screens/Clima';
import Info from './src/screens/Info';
import Assunto from './src/screens/Assunto';
import FimConversa from './src/screens/FimConversa';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Mapa" component={Mapa} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Clima" component={Clima} />
          <Stack.Screen name="Colorconfig" component={Colorconfig} />
          <Stack.Screen name="Piada" component={Piada} />
          <Stack.Screen name="Conversa" component={Conversa} />
          <Stack.Screen name="Curiosidade" component={Curiosidade} />
          <Stack.Screen name="Assunto" component={Assunto} />
          <Stack.Screen name="FimConversa" component={FimConversa} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
