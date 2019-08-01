import { TabNavigatorConfig } from 'react-navigation'
import * as globalConfig from '../../../../../globalConfiguration/globalConfig'

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
/** You can define additional options for our router here */
export const routerOptions: TabNavigatorConfig = {
    initialRouteName: globalConfig.START_PAGE, // Start page
    backBehavior: 'history',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    lazy: true,
    // should exist, but typings not up-to-date
    // optimizationsEnabled: true,
    tabBarOptions: {
        // scrollEnabled (scrolling through tabs itself)
        activeTintColor: '#000',
        keyboardHidesTabBar: true, // TODO: not working
        inactiveTintColor: '#888',
        style: { backgroundColor: '#fff' },
        indicatorStyle: { backgroundColor: '#000' },
        allowFontScaling: true,
        showIcon: true,
        showLabel: false,
        // renderIndicator (maybe as solution for loading indicator for lazy loading?)
    },
    defaultNavigationOptions: {
        /*add default icons here if icons enabled*/
    },
}
