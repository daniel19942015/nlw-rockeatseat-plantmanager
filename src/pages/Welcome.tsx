import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentify')
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie {'\n'} suas plantas de{'\n'} forma fácil
            </Text>

                <Image
                    source={watering}
                    style={style.image}
                    resizeMode="contain"
                />

                <Text style={style.subTitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
            </Text>

                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >

                    <Feather
                        name="chevron-right"
                        style={style.buttonIcon}
                    />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.hadding,
        lineHeight: 38
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get("window").width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 30
    }
})