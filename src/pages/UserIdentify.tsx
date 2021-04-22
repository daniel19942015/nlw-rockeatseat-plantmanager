import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentify() {

    const [isFocus, setFocus] = useState(false)
    const [isFilled, setFilled] = useState(false)
    const [name, setName] = useState<string>()

    const navigation = useNavigation();

    function handleSubmit() {
        navigation.navigate('Confirmation')
    }

    function handleInpuBlur() {
        setFocus(false)
        setFilled(!!name)
    }

    function handleInpuFocus() {
        setFocus(true)
    }

    function handleInpuChange(value: string) {
        setFilled(!!value)
        setName(value)
    }


    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.content}>
                        <View style={style.form}>

                            <View style={style.header}>

                                <Text
                                    style={style.emoji}
                                >
                                    {isFilled ? '😄' : '🙂'}
                                </Text>
                                <Text
                                    style={style.title}
                                >
                                    Como podemos {'\n'} chamar você?
                            </Text>

                            </View>
                            <TextInput
                                style={
                                    [
                                        style.input,
                                        (isFocus || isFilled) && { borderColor: colors.green }
                                    ]
                                }
                                placeholder="Digite um nome"
                                onBlur={handleInpuBlur}
                                onFocus={handleInpuFocus}
                                onChangeText={handleInpuChange}
                            />
                            <View style={style.footer}>
                                <Button
                                    title="Confirmação"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        width: "100%",
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "grey",
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center"
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.hadding,
        marginTop: 20
    },
    footer: {
        width: "100%",
        marginTop: 40,
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center'
    }

})