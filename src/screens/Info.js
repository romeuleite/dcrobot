import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';

const Info = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View flexDirection={'row'} margin={20} alignItems={'center'} gap={5}>
                <FontAwesome5 name="info" size={24} color="black" />
                <Text style={styles.infoTitleText}>Informações</Text>
            </View>
            <View width={500}>
                <Text style={styles.textTile}>O que o robô pode fazer</Text>
                <Text style={styles.textDescription}>Este robô pode responder a interação do humano por meio de conversas com assuntos padronizados, contar piadas, mostrar curiosidades sobre o departamento de computação, além de exibir o clima e uma mapa local para o usuário.</Text>
                <Text style={styles.textTile}>Como esse robô interage?</Text>
                <Text style={styles.textDescription}>Este robô é equipado com uma câmera para capturar a face do humano e detectar sua expressão facial. A partir dessa leitura ele sugere uma conversa ou outras opções por meio deste tablet que podem sustentar ou mudar a emoção do usuário.</Text>
                <Image source={require('../assets/logo-dc.png')} style={styles.dcImage} />
            </View>
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
    },
    infoTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTile: {
        color: '#3098E9',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textDescription: {

    },
    dcImage: {
        resizeMode: 'contain',
        width: 150,
        alignSelf: 'flex-start',
    },
    leftMenu: {
        position: 'absolute',
        left: 0,
        top: 40,
      },
});

export default Info
