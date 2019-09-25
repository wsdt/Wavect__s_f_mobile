import * as React from 'react'
import { Image } from 'react-native'
import { NavigationParams, NavigationRoute, NavigationRouteConfigMap } from 'react-navigation'
import { NavigationMaterialTabOptions, NavigationTabProp } from 'react-navigation-tabs'
import GeneralSettingsScreenRouter from './GeneralSettingsScreenRouter/GeneralSettingsScreenRouter'
import HomeScreenRouter from './HomeScreenRouter/HomeScreenRouter'
import { tabRoutes } from './TabRoutes'

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap<NavigationMaterialTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>>> = {
    [tabRoutes.HomeScreen]: {
        screen: HomeScreenRouter, // which component to load
        navigationOptions: {
            tabBarIcon: () => (
                <Image
                    source={require('../../../../../assets/img/icons/ic_tab_challenges.png')}
                    style={{ width: 20, height: 20, tintColor: 'black' }}
                />
            ),
        },
    },
    [tabRoutes.SettingsScreen]: {
        screen: GeneralSettingsScreenRouter,
        navigationOptions: {
            tabBarIcon: () => (
                <Image
                    source={require('../../../../../assets/img/icons/ic_tab_settings.png')}
                    style={{ width: 20, height: 20, tintColor: 'black' }}
                />
            ),
        },
    },
}
