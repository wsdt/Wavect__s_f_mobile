import * as React from "react"
import { Icon } from "react-native-elements"
import { BottomTabNavigatorConfig } from "react-navigation"
import * as globalConfig from "../../../../../globalConfiguration/globalConfig"

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
/** You can define additional options for our router here */
export const routerOptions: BottomTabNavigatorConfig = {
    initialRouteName: globalConfig.START_PAGE, // Start page
    backBehavior: "history",
    tabBarOptions: {
        activeTintColor: "#000",
        activeBackgroundColor: "#ccc",
        inactiveTintColor: "#888",
        labelStyle: {
            fontSize: 12,
        },
    },
    defaultNavigationOptions: {
        tabBarIcon: <Icon name="exclamation-triangle" type="font-awesome" />,
    },
}
