import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

const Imitacao = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/robo-raivoso.png')} style={styles.imitacaoImage}/>
      <View style={styles.warningView}>
        <Text style={styles.introText}>Toque para retornar à conversa</Text>
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
  },
  warningView:{
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imitacaoImage: {
    resizeMode: 'contain',
    width:150,
    height:220,
  },
  introText:{
    fontSize: 32,
  },
});

export default Imitacao
