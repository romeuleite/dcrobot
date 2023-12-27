import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { WEATHER_API_KEY } from '@env';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';

const Clima = () => {
    return (
        <View style={styles.container}>
            <View flexDirection={'row'} marginBottom={20} alignItems={'center'} gap={5}>
                <Ionicons name="cloud" size={24} color="#fff" />
                <Text style={styles.weatherTitleText}>Configurações</Text>
            </View>
            <Text>{WEATHER_API_KEY}</Text>
            <View style={styles.leftMenu}>
                <Leftnavmenu />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7CBBE7',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    weatherTitleText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    leftMenu: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
});

export default Clima
