import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

import Backbutton from './Backbutton';
import Sidebar from './Sidebar';

const Leftnavmenu = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Backbutton navigation={navigation}/>
        <Sidebar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Leftnavmenu
