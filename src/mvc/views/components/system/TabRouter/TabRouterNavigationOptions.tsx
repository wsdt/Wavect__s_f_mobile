import {TabNavigatorConfig} from "react-navigation"
import * as globalConfig from "../../../../../globalConfiguration/globalConfig"

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
/** You can define additional options for our router here */
export const routerOptions: TabNavigatorConfig = {
    initialRouteName: globalConfig.START_PAGE, // Start page
    backBehavior: "history",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
        // scrollEnabled: true, // todo: maybe no scrollviews needed anymore (but making tabbar width weird -> maybe because of existing scrollviews?)
        activeTintColor: "#000",
        inactiveTintColor: "#888",
        style: {backgroundColor: "#fff"},
        indicatorStyle: {backgroundColor: "#000",},
        allowFontScaling: true,
    },
    defaultNavigationOptions: {/*add default icons here if icons enabled*/},
}
