import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import Leftnavmenu from '../components/Leftnavmenu';

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
        <Ionicons name="person" size={100} color="black" />
        <View style={styles.robotSentencesView}>
          <View style={styles.convView}>
            <Text style={styles.continueText}>Continuar conversa</Text>
            <TouchableOpacity><MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" /></TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity onPress={() => navigation.navigate('Piada')}>
              <Text style={styles.robotChatText} width={135}>Contar piada</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Curiosidade')}>
              <Text style={styles.robotChatText} width={135}>Ver curiosidades</Text>
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
    paddingTop: 80,
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
    width: 280,
    height: 50,
    margin: 5,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  convView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    resizeMode: 'contain',
    width: 100,
    height: 120,
  },
  continueText: {
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
  leftMenu: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

export default Conversa
