import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';
import Backbutton from '../components/Backbutton';
import { Colors } from '../colors/Colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Colorconfig = ({ navigation }) => {
    const [colorChange, setColorChange] = useState(1);

    return (
        <View style={styles.container}>
            <View flexDirection={'row'} marginBottom={20} alignItems={'center'} gap={5}>
                <Ionicons name="settings-sharp" size={24} color="black" />
                <Text style={styles.configTitleText}>Configurações</Text>
            </View>
            <Text style={styles.colorCorrectionText}>Correção de cor</Text>
            <View height={1} width={600} backgroundColor={Colors.blackDefault} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.colorTitleText}>Padrão</Text>
                <View style={styles.colorBlindView}>
                    <TouchableOpacity onPress={() => setColorChange(1)}>
                        <FontAwesome name={colorChange === 1 ? "dot-circle-o" : "circle-o"} size={24} color="black" marginRight={30} />
                    </TouchableOpacity>
                    <View style={styles.colorSquare} backgroundColor={Colors.default.primary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.default.secondary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.default.lightgray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.default.gray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.default.black} />
                </View>
                <Text style={styles.colorTitleText}>Protanopia</Text>
                <View style={styles.colorBlindView}>
                    <TouchableOpacity onPress={() => setColorChange(2)}>
                        <FontAwesome name={colorChange === 2 ? "dot-circle-o" : "circle-o"} size={24} color="black" marginRight={30} />
                    </TouchableOpacity>
                    <View style={styles.colorSquare} backgroundColor={Colors.protanopia.primary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.protanopia.secondary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.protanopia.lightgray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.protanopia.gray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.protanopia.black} />
                </View>
                <Text style={styles.colorTitleText}>Deuteranopia</Text>
                <View style={styles.colorBlindView}>
                    <TouchableOpacity onPress={() => setColorChange(3)}>
                        <FontAwesome name={colorChange === 3 ? "dot-circle-o" : "circle-o"} size={24} color="black" marginRight={30} />
                    </TouchableOpacity>
                    <View style={styles.colorSquare} backgroundColor={Colors.deuteranopia.primary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.deuteranopia.secondary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.deuteranopia.lightgray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.deuteranopia.gray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.deuteranopia.black} />
                </View>
                <Text style={styles.colorTitleText}>Tritanopia</Text>
                <View style={styles.colorBlindView}>
                    <TouchableOpacity onPress={() => setColorChange(4)}>
                        <FontAwesome name={colorChange === 4 ? "dot-circle-o" : "circle-o"} size={24} color="black" marginRight={30} />
                    </TouchableOpacity>
                    <View style={styles.colorSquare} backgroundColor={Colors.tritanopia.primary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.tritanopia.secondary} />
                    <View style={styles.colorSquare} backgroundColor={Colors.tritanopia.lightgray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.tritanopia.gray} />
                    <View style={styles.colorSquare} backgroundColor={Colors.tritanopia.black} />
                </View>
            </ScrollView>
            <View style={styles.leftMenu}>
                <Backbutton navigation={navigation} />
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
        paddingTop: 40,
    },
    leftMenu: {
        position: 'absolute',
        left: 0,
        top: 40,
      },
    colorTitleText: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    colorBlindView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    colorCorrectionText: {
        fontSize: windowHeight * 0.04,
        textAlign: 'left',
        width: 580,
    },
    configTitleText: {
        fontSize: windowHeight * 0.06,
        fontWeight: 'bold',
    },
    colorSquare: {
        width: 100,
        height: 100,
    }
});

export default Colorconfig
