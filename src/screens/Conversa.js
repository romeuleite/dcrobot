import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo, Feather } from '@expo/vector-icons';
import Leftnavmenu from '../components/Leftnavmenu';
import { listaEmocao } from '../utilities/listaEmocao';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Conversa = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emotion, setEmotion] = useState(5)
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
              <Text style={styles.modalText}>Selecione uma nova emoção</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="close" size={48} color="white" paddingLeft={90} />
              </TouchableOpacity>
            </View>
            <View flexDirection={'row'}>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(0); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>😠</Text>
                  <Text style={styles.emojiText}>Raiva</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(1); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>😄</Text>
                  <Text style={styles.emojiText}>Alegria</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(5); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>😥</Text>
                  <Text style={styles.emojiText}>Tristeza</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(2); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>😶</Text>
                  <Text style={styles.emojiText}>Medo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(4); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>😮</Text>
                  <Text style={styles.emojiText}>Surpresa</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emojiView}>
                <TouchableOpacity onPress={() => { setEmotion(3); setModalVisible(!modalVisible) }}>
                  <Text style={styles.emojiImage}>🤢</Text>
                  <Text style={styles.emojiText}>Nojo</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <Text style={styles.emojiText}>😠 😄 😥 😶 😮 🤢</Text> */}
          </View>
        </View>
      </Modal>

      <View style={styles.robotChatView}>
        <Image source={require('../assets/robo-triste.png')} style={styles.homeImage} />
        <View style={styles.robotSentencesView}>
          <Text style={styles.robotChatText}>Notei que você parece {listaEmocao[emotion]} hoje...</Text>
          <Text style={styles.robotChatText}>Quer me contar sobre isso?</Text>
        </View>
      </View>
      <View style={styles.robotChatView}>
        <Ionicons name="person" size={windowWidth * 0.12} color="black" />
        <View style={styles.robotSentencesView}>
          <TouchableOpacity onPress={() => navigation.navigate('Assunto', { emotion: emotion })}>
            <View style={styles.convView}>
              <Text style={styles.continueText}>Continuar conversa</Text>
              <MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.robotChatText}>Não é bem essa emoção <Feather name="edit" size={24} color="black" /></Text>
          </TouchableOpacity>
          <View flexDirection={'row'}>
            <TouchableOpacity onPress={() => navigation.navigate('Piada')}>
              <Text style={styles.robotChatText} width={windowWidth * 0.2}>Contar piada</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Curiosidade')}>
              <Text style={styles.robotChatText} width={windowWidth * 0.2}>Ver curiosidades</Text>
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
    gap: 30,
    paddingTop: windowWidth * 0.1,
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
    width: windowWidth * 0.12,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: windowWidth,
    height: windowHeight,
    margin: 20,
    backgroundColor: 'rgba(25,90,165,0.9)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 90
  },
  emojiView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  emojiImage: {
    fontSize: 48,
    textAlign: 'center',
  },
  emojiText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  }
});

export default Conversa
