import * as React from 'react'
import { Linking } from 'react-native'
import { CreateNavigatorConfig, NavigationStackRouterConfig } from 'react-navigation'
import { NavigationStackConfig, NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack'
import { START_PAGE } from '../../../../../../globalConfiguration/globalConfig'
import { RoundedButton } from '../../../functional/RoundedButton/RoundedButton'

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */

/** You can define additional options for our router here */
export const routerOptions: CreateNavigatorConfig<NavigationStackConfig, NavigationStackRouterConfig, NavigationStackOptions, NavigationStackProp> = {
    initialRouteName: START_PAGE, // Start page
    defaultNavigationOptions: {
        headerRight: (
            <RoundedButton
                containerStyle={{ marginRight: 5 }}
                title="Feedback"
                press={() => Linking.openURL('mailto:support@wavect.io?subject=Wavect-Feedback&body=Was könnten wir verbessern?')}
            />
        ),
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            shadowRadius: 0,
        },
        headerTintColor: '#111' /* tintColor is used by title and back btn etc. */,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
}

/* In case shadow is on IOS or Android still there
    shadowOffset: {
    height: 0,} */
