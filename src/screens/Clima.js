import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { WEATHER_API_KEY } from '@env';
import { useGetWeather } from '../hooks/useGetWeather';
import { weatherType } from '../utilities/weatherType'
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, Foundation, Entypo, Feather } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';

const Clima = ({navigation}) => {
    //const [loading, error, weather] = useGetWeather()

    if (weather && weather.list && !loading) {
        //const { main: { temp, feels_like, temp_max, temp_min }, clima } = weather.list[0]
        //const weatherCondition = clima[0].main

        return (
            <View style={styles.container}>
                <View flexDirection={'row'} marginBottom={20} alignItems={'center'} gap={5}>
                    <Ionicons name="cloud" size={24} color="#fff" />
                    <Text style={styles.weatherTitleText}>Configurações</Text>
                </View>
                <Text>{weather[0]}</Text>
                <View style={styles.leftMenu}>
                    <Leftnavmenu navigation={navigation}/>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'#195AA5'} />
        </View>
    )
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
