import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { listaCuriosidades } from '../utilities/listaCuriosidades';

import Leftnavmenu from '../components/Leftnavmenu';

const Curiosidade = ({navigation}) => {
  const [randomNumber, setRandomNumber] = useState(1)

  generateRandomNumber = () => {
    const min = 1;
    const max = 6;
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
  };

  return (
    <View style={styles.container}>
        <View style={styles.robotChatView}>
            <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage}/>
            <View style={styles.robotSentencesView}> 
                <Text style={styles.robotChatText}>{listaCuriosidades[randomNumber-1]}</Text>
            </View>
        </View>
        <View style={styles.robotChatView}>
            <View style={styles.robotSentencesView}>
                <View style={styles.convView}>
                    <Text style={styles.continueText}>Ver outras curiosidades</Text>
                    <TouchableOpacity onPress={this.generateRandomNumber}><MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" /></TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.leftMenu}>
            <Leftnavmenu navigation={navigation}/>
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
