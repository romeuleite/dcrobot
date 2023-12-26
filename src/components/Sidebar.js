import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Ionicons, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

const Sidebar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.sideBar}>
            <TouchableOpacity style={styles.iconBox}><Ionicons name="settings-sharp" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><FontAwesome5 name="info" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Ionicons name="cloud" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Foundation name="map" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Entypo name="home" size={24} color="#fff" /></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sideBar:{
    backgroundColor: "#195AA5",
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width:60,
    height:250,
    position: 'absolute',
    left: 20,
    bottom: 30,
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
