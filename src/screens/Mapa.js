import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Leftnavmenu from '../components/Leftnavmenu';

const Mapa = ({ navigation }) => {
    const [location, setLocation] = useState({
        latitude: -21.979579406397583,
        longitude: -47.88038067934134,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
            );
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: location.latitudeDelta,
                longitudeDelta: location.longitudeDelta,
            }}>
                <Marker coordinate={{ "latitude": location.latitude, "longitude": location.longitude }} />
            </MapView>
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
    },
    map: {
        width: '100%',
        height: '100%',
    },
    leftMenu: {
        position: 'absolute',
        left: 0,
        top: 40,
      },
});

export default Mapa
