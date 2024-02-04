import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import { listaPiadas } from '../utilities/listaPiadas';
import Leftnavmenu from '../components/Leftnavmenu';
import { useRoute } from "@react-navigation/native";
import { listaAssuntos } from '../utilities/listaAssuntos';
import { listaOpcao } from '../utilities/listaOpcao';
import { emotionColors } from '../utilities/emotionColors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Assunto = ({ navigation}) => {
    const route = useRoute()
    const emotion = route.params?.emotion


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.titleText}>{listaAssuntos[emotion]}</Text>
            <View style={styles.tema1View}>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion], emotion: emotion, resposta: 0})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion+6], emotion: emotion, resposta: 6})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion+6]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion+12], emotion: emotion, resposta: 12})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion+12]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>{listaAssuntos[emotion+6]}</Text>
            <View style={styles.tema1View}>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion+18], emotion: emotion, resposta: 18})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion+18]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion+24], emotion: emotion, resposta: 24})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion+24]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FimConversa', {assunto: listaOpcao[emotion+30], emotion: emotion, resposta: 30})}>
                    <View style={styles.convView} backgroundColor={emotionColors[emotion]}>
                        <Text style={styles.optionText}>{listaOpcao[emotion+30]}</Text>
                    </View>
                </TouchableOpacity>
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap:10,
        paddingTop: 80,
        paddingLeft: 140,
    },
    titleText:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: windowHeight * 0.05,
        fontWeight: 'bold',
    },
    tema1View: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    convView: {
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        minHeight: windowHeight * 0.12,
    },
    optionText: {
        fontSize: windowHeight * 0.04,
        color: 'white',
        padding: 3,
        textAlignVertical: 'center',
        textAlign: 'left',
    },
    leftMenu: {
        position: 'absolute',
        left: 0,
        top: 40,
    },
});

export default Assunto
