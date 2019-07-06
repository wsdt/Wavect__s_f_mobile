import { NavigationScreenOptions } from "react-navigation"

/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
export const defaultNavigationOptions: NavigationScreenOptions = {
    headerStyle: {
        backgroundColor: "#0055ee",
    },
    headerTintColor: "#fff" /* tintColor is used by title and back btn etc. */,
    headerTitleStyle: {
        fontWeight: "bold",
    },
}
