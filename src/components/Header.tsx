import React from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'

import userImg from '../assets/daniel.jpg'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export function Header(){
    return (
        <View style={ style.container }>
            <View>
                <Text style={style.greeting}>Olá</Text>
                <Text style={style.userName}>Daniel</Text>
            </View>
            <Image source={userImg} style={style.image}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.hadding,
        color: colors.heading,
        lineHeight: 40
    }
})