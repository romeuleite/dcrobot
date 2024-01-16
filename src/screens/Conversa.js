import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import Leftnavmenu from '../components/Leftnavmenu';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Conversa = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.robotChatView}>
        <Image source={require('../assets/robo-triste.png')} style={styles.homeImage} />
        <View style={styles.robotSentencesView}>
          <Text style={styles.robotChatText}>Notei que você parece triste hoje...</Text>
          <Text style={styles.robotChatText}>Quer me contar sobre isso?</Text>
        </View>
      </View>
      <View style={styles.robotChatView}>
        <Ionicons name="person" size={windowWidth*0.12} color="black" />
        <View style={styles.robotSentencesView}>
          <View style={styles.convView}>
            <Text style={styles.continueText}>Continuar conversa</Text>
            <TouchableOpacity><MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" /></TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity onPress={() => navigation.navigate('Piada')}>
              <Text style={styles.robotChatText} width={windowWidth*0.2}>Contar piada</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Curiosidade')}>
              <Text style={styles.robotChatText} width={windowWidth*0.2}>Ver curiosidades</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.backButton}><FontAwesome name="long-arrow-left" size={32} color="#fff" /></TouchableOpacity>
      <View style={styles.leftMenu}>
        <Leftnavmenu navigation={navigation} />
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
    paddingTop: windowWidth *0.1,
  },
  robotChatView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotSentencesView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotChatText: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    width: windowWidth * 0.4,
    height: windowHeight * 0.15,
    margin: 5,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
    fontSize: windowHeight * 0.04,
  },
  convView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    resizeMode: 'contain',
    width: windowWidth*0.12,
    height: 120,
  },
  continueText: {
    fontSize: windowHeight * 0.05,
    backgroundColor: '#47B9F5',
    color: 'white',
    borderRadius: 10,
    width: windowWidth * 0.35,
    height: windowHeight * 0.15,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  leftMenu: {
    position: 'absolute',
    left: 0,
    top: 40,
  },
});

export default Conversa
