import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Backbutton = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}><FontAwesome name="long-arrow-left" size={32} color="#fff" /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    backgroundColor: "#195AA5",
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    bottom: 300,
  }
});

export default Backbutton
