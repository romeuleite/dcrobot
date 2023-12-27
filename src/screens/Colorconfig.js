import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

import Leftnavmenu from '../components/Leftnavmenu';
import Backbutton from '../components/Backbutton';
import { Colors } from '../colors/Colors';

const Colorconfig = ({navigation}) => {
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
                    <Feather name="circle" size={24} color="black" marginRight={30} />
                    <View style={styles.colorSquare} backgroundColor={Colors.primaryDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.secondaryDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.lightgrayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.grayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.blackDefault} />
                </View>
                <Text style={styles.colorTitleText}>Protanopia</Text>
                <View style={styles.colorBlindView}>
                    <Feather name="circle" size={24} color="black" marginRight={30} />
                    <View style={styles.colorSquare} backgroundColor={Colors.primaryProtanopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.secondaryProtanopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.lightgrayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.grayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.blackDefault} />
                </View>
                <Text style={styles.colorTitleText}>Deuteranopia</Text>
                <View style={styles.colorBlindView}>
                    <Feather name="circle" size={24} color="black" marginRight={30} />
                    <View style={styles.colorSquare} backgroundColor={Colors.primaryDeuteranopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.secondaryDeuteranopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.lightgrayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.grayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.blackDefault} />
                </View>
                <Text style={styles.colorTitleText}>Tritanopia</Text>
                <View style={styles.colorBlindView}>
                    <Feather name="circle" size={24} color="black" marginRight={30} />
                    <View style={styles.colorSquare} backgroundColor={Colors.primaryTritanopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.secondaryTritanopia} />
                    <View style={styles.colorSquare} backgroundColor={Colors.lightgrayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.grayDefault} />
                    <View style={styles.colorSquare} backgroundColor={Colors.blackDefault} />
                </View>
            </ScrollView>
            <View style={styles.leftMenu}>
                <Backbutton navigation={navigation}/>
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
        bottom: 0,
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
    colorCorrectionText:{
        fontSize: 16,
        textAlign: 'left',
        width: 580,
    },
    configTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    colorSquare: {
        width: 100,
        height: 100,
    }
});

export default Colorconfig
