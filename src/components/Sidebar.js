import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const windowHeight = Dimensions.get('window').height;

const Sidebar = ({ navigation }) => {
  const primaryColor = useSelector(state => state.primaryColor);
  const secondaryColor = useSelector(state => state.secondaryColor);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.sideBar} backgroundColor={primaryColor} borderRadius={10}>
        <TouchableOpacity onPress={() => navigation.navigate('Colorconfig')}>
          <View style={styles.iconBox} backgroundColor={secondaryColor} borderRadius={10}>
            <Ionicons name="settings-sharp" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <View style={styles.iconBox} backgroundColor={secondaryColor} borderRadius={10}>
            <FontAwesome5 name="info" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Clima')}>
          <View style={styles.iconBox} backgroundColor={secondaryColor} borderRadius={10}>
            <Ionicons name="cloud" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
          <View style={styles.iconBox} backgroundColor={secondaryColor} borderRadius={10}>
            <Foundation name="map" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconBox} backgroundColor={secondaryColor} borderRadius={10}>
            <Entypo name="home" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  sideBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
    height: windowHeight * 0.7,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default Sidebar
