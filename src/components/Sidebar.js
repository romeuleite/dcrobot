import { StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

const Sidebar = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.sideBar}>
            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.navigate('Colorconfig')}><Ionicons name="settings-sharp" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.navigate('Info')}><FontAwesome5 name="info" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.navigate('Clima')}><Ionicons name="cloud" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.navigate('Mapa')}><Foundation name="map" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.navigate('Home')}><Entypo name="home" size={24} color="#fff" /></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  sideBar:{
    backgroundColor: "#195AA5",
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width:60,
    height: windowHeight * 0.7,
  },
  iconBox: {
    backgroundColor: "#47B9F5",
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default Sidebar
