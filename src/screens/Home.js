import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage}/>
      <TouchableOpacity style={styles.backButton}><FontAwesome name="long-arrow-left" size={32} color="#fff" /></TouchableOpacity>
      <View style={styles.sideBar}>
        <TouchableOpacity style={styles.iconBox}><Ionicons name="settings-sharp" size={24} color="#fff" /></TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}><FontAwesome5 name="info" size={24} color="#fff" /></TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}><Ionicons name="cloud" size={24} color="#fff" /></TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}><Foundation name="map" size={24} color="#fff" /></TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}><Entypo name="home" size={24} color="#fff" /></TouchableOpacity>
      </View>
      <View style={styles.startConvView}>
        <Text style={styles.introText}>Olá, vamos conversar?</Text>
        <TouchableOpacity><MaterialCommunityIcons name="send-circle" size={48} color="#47B9F5" /></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startConvView:{
    gap: 10,
    flexDirection: 'row',
    //alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    resizeMode: 'contain',
    width:150,
    height:220,
  },
  introText:{
    fontSize: 32,
  },
  sideBar:{
    backgroundColor: "#195AA5",
    borderRadius: 10,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width:60,
    height:250,
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
  backButton: {
    backgroundColor: "#195AA5",
    position: 'absolute',
    left: 0,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default Home
