import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';

const Curiosidade = () => {
  return (
    <View style={styles.container}>
        <View style={styles.robotChatView}>
            <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage}/>
            <View style={styles.robotSentencesView}> 
                <Text style={styles.robotChatText}>Caps Lock Day{'\n'}Existe um "Dia do Caps Lock" celebrado em 22 de outubro. A ideia é dedicar um dia ao uso exagerado das maiúsculas na internet.</Text>
            </View>
        </View>
        <View style={styles.robotChatView}>
            <View style={styles.robotSentencesView}>
                <View style={styles.convView}>
                    <Text style={styles.continueText}>Ver outras curiosidades</Text>
                    <TouchableOpacity><MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" /></TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.leftMenu}>
            <Leftnavmenu/>
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
    gap: 20,
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
  leftMenu:{
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

export default Curiosidade
