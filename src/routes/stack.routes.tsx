import React from 'react'
import {
    createStackNavigator
} from '@react-navigation/stack'

import { Welcome } from '../pages/Welcome'
import { UserIdentify } from '../pages/UserIdentify'
import { Confirmation } from '../pages/Confirmation'

import colors from '../styles/colors'
import { PlantSelect } from '../pages/PlantSelect'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <stackRoutes.Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: colors.white
                }
            }}
        >
            <stackRoutes.Screen
                name="Welcome"
                component={Welcome}
            />

            <stackRoutes.Screen
                name="UserIdentify"
                component={UserIdentify}
            />
            <stackRoutes.Screen
                name="Confirmation"
                component={Confirmation}
            />
            <stackRoutes.Screen
                name="PlantSelect"
                component={PlantSelect}
            />

        </stackRoutes.Navigator>
    )

}

export default AppRoutes;