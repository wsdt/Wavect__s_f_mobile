import * as React from "react"
import {createSwitchNavigator, SwitchNavigatorConfig} from "react-navigation"


/**
 * Used e.g. for authentication.
 * @param noReturnableScreen: E.g. login screen (on back btn press this pages won't be shown again)
 * @param targetScreen: Calling that screen and deleting/resetting routes -> no return back to noReturnableScreen.
 * @param conf: Additional configuration. Optional
 */
export const SwitchRouter = (noReturnableScreen: React.ReactNode, targetScreen: React.ReactNode, conf?: SwitchNavigatorConfig) => {
    return createSwitchNavigator(
        {
            noReturnable: {screen: noReturnableScreen},
            targetScreen: {screen: targetScreen}
        },
        conf
    )
}