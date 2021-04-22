import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'

import { Header } from '../components/Header'
import fonts from '../styles/fonts'

export function PlantSelect() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header />
                <Text style={style.title}>
                    Em qual ambiente
            </Text>
                <Text style={style.subtitle}>
                    você quer colocar sua planta?
            </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header:{
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.hadding,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    }
})