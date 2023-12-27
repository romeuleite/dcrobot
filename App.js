import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Imitacao from './src/screens/Imitacao';
import Conversa from './src/screens/Conversa';
import Curiosidade from './src/screens/Curiosidade';
import Piada from './src/screens/Piada';
import Mapa from './src/screens/Mapa';
import Colorconfig from './src/screens/Colorconfig';


export default function App() {
  return (
    <Mapa/>
  );
};
