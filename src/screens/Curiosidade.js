import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { listaCuriosidades } from '../utilities/listaCuriosidades';

import Leftnavmenu from '../components/Leftnavmenu';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Curiosidade = ({ navigation }) => {
  const [randomNumber, setRandomNumber] = useState(1)

  generateRandomNumber = () => {
    const min = 1;
    const max = 6;
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
  };

  return (
    <View style={styles.container}>
      <View style={styles.robotChatView}>
        <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage} />
        <View style={styles.robotSentencesView}>
          <Text style={styles.robotChatText}>{listaCuriosidades[randomNumber - 1]}</Text>
        </View>
      </View>
      <View style={styles.robotChatView}>
        <View style={styles.robotSentencesView}>
        <TouchableOpacity onPress={this.generateRandomNumber}>
          <View style={styles.convView}>
            <Text style={styles.continueText}>Ver outras curiosidades</Text>
            <MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" />
          </View>
        </TouchableOpacity>
        </View>
      </View>
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
    gap: 20,
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
    fontSize: windowHeight * 0.04,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    width: windowWidth * 0.4,
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
    width: windowWidth*0.12,
    height: windowHeight * 0.3,
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

export default Curiosidade
