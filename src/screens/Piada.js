import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

const Piada = () => {
  return (
    <View style={styles.container}>
        <View style={styles.robotChatView}>
            <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage}/>
            <View style={styles.robotSentencesView}> 
                <Text style={styles.robotChatText}>O que é um terapeuta? {'\n'} 1.024 gigapeutas</Text>
            </View>
        </View>
        <View style={styles.robotChatView}>
            <View style={styles.robotSentencesView}>
                <View style={styles.convView}>
                    <Text style={styles.continueText}>Contar outra piada</Text>
                    <TouchableOpacity><MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" /></TouchableOpacity>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.backButton}><FontAwesome name="long-arrow-left" size={32} color="#fff" /></TouchableOpacity>
        <View style={styles.sideBar}>
            <TouchableOpacity style={styles.iconBox}><Ionicons name="settings-sharp" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><FontAwesome5 name="info" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Ionicons name="cloud" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Foundation name="map" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}><Entypo name="home" size={24} color="#fff" /></TouchableOpacity>
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
    gap: 50,
  },
  robotChatView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotSentencesView:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotChatText: {
    fontSize: 24,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    width: 280,
    height: 100,
    margin: 5,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  convView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    resizeMode: 'contain',
    width:100,
    height:120,
  },
  continueText:{
    fontSize: 18,
    backgroundColor: '#47B9F5',
    color: 'white',
    borderRadius: 10,
    width: 230,
    height: 50,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
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

export default Piada
