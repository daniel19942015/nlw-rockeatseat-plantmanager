import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import font from '../styles/fonts'

export function Confirmation() {

    const naigator = useNavigation()

    function hundleMoveOn (){
        naigator.navigate('PlantSelect')
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    😄
                </Text>

                <Text style={style.title}>
                    Prontinho
                </Text>

                <Text style={style.subtitle}>
                    Agora, vamos começar a cuidar da suas plantinhas com muito cuidado
                </Text>
                <View style={style.footer}>
                    <Button 
                        title="Começar"
                        onPress={hundleMoveOn}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: font.hadding,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading
    },
    emoji: {
        fontSize: 78
    },
    footer: {
        width: "100%",
        paddingHorizontal: 75,
        marginTop: 20
    }

})
