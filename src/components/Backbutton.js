import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Backbutton = ({ navigation }) => {
  const primaryColor = useSelector(state => state.primaryColor);
  const secondaryColor = useSelector(state => state.secondaryColor);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <View style={styles.backButton} backgroundColor={primaryColor}>
          <FontAwesome name="long-arrow-left" size={32} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '5%'
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default Backbutton
