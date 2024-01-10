import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import Leftnavmenu from '../components/Leftnavmenu';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/robo-home.png')} style={styles.homeImage} />
      <View style={styles.leftMenu}>
        <Leftnavmenu navigation={navigation} />
      </View>
      <View style={styles.startConvView}>
        <Text style={styles.introText}>Olá, vamos conversar?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Conversa')}><MaterialCommunityIcons name="send-circle" size={48} color="#47B9F5" /></TouchableOpacity>
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
  startConvView: {
    gap: 10,
    flexDirection: 'row',
    //alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    resizeMode: 'contain',
    width: '60%',
    height: '60%',
  },
  introText: {
    fontSize: 32,
  },
  leftMenu: {
    position: 'absolute',
    left: 0,
    top: 40,
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

export default Home
