import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import { listaPiadas } from '../utilities/listaPiadas';
import Leftnavmenu from '../components/Leftnavmenu';
import { useRoute } from "@react-navigation/native";
import { emotionColors } from '../utilities/emotionColors';
import { listaRespostas } from '../utilities/listaRespostas';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const FimConversa = ({ navigation }) => {
    const [randomNumber, setRandomNumber] = useState(1)
    const route = useRoute()
    const assunto = route.params?.assunto
    const emotion = route.params?.emotion
    const resposta = route.params.resposta


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.alignView}>
                    <View style={styles.robotChatView}>
                        <Ionicons name="person" size={windowWidth * 0.12} color="black" />
                        <View style={styles.robotSentencesView}>
                            <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                                <Text style={styles.selectText}>{assunto}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.robotChatView}>
                        <Image source={require('../assets/robo-alegre.png')} style={styles.homeImage} />
                        <View style={styles.robotSentencesView}>
                            <Text style={styles.robotChatText}>{listaRespostas[emotion + resposta]}</Text>
                        </View>
                    </View>
                    <View style={styles.robotChatView}>
                        <Ionicons name="person" size={windowWidth * 0.12} color="black" />
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={styles.robotSentencesView}>
                                <View style={styles.convView}>
                                    <Text style={styles.continueText}>Voltar para o início</Text>
                                    <MaterialCommunityIcons name="send-circle" size={52} color="#47B9F5" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.backButton}><FontAwesome name="long-arrow-left" size={32} color="#fff" /></TouchableOpacity>
                </View>
            </ScrollView>
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
        gap: 10,
        paddingTop: 80,
    },
    alignView: {
        alignItems: 'flex-start',
    },
    robotChatView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    robotSentencesView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    robotChatText: {
        fontSize: 24,
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
        borderRadius: 10,
    },
    homeImage: {
        resizeMode: 'contain',
        width: windowWidth * 0.12,
        height: windowHeight * 0.3,
    },
    continueText: {
        fontSize: windowHeight * 0.05,
        minHeight: windowHeight * 0.15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#47B9F5',
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'left',
    },
    selectText: {
        fontSize: windowHeight * 0.05,
        color: 'white',
        borderRadius: 10,
        width: windowWidth * 0.40,
        minHeight: windowHeight * 0.15,
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

export default FimConversa
