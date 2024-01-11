import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Leftnavmenu from '../components/Leftnavmenu';

const lightgrayDefault = '#ECECEC'
const grayDefault = '#323232'
const blackDefault = '#000000'

const ColorManager = ({ colorBlindness }) => {
    const [primaryColor, setPrimaryColor] = useState('#195AA5')
    const [secondaryColor, setSecondaryColor] = useState('#195AA5')

    if (colorBlindness === 1){
        setPrimaryColor('#195AA5')
        setSecondaryColor('#47B9F5')
    }
    if (colorBlindness === 2){
        setPrimaryColor('#1F4E9E')
        setSecondaryColor('#29B200')
    }

    return[
        primaryColor,
        secondaryColor,
        lightgrayDefault,
        grayDefault,
        blackDefault
    ]

}

export default ColorManager


