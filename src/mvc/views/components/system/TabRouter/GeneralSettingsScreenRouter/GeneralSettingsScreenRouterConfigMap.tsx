import { NavigationRouteConfigMap } from "react-navigation"
import * as _schema from "../../../../../../assets/translations/_schema.json"
import { t } from "../../../../../controllers/MultiLingualityController/MultiLingualityController"
import styles from "../TabRouter.css"
import { routes } from "./GeneralSettingsScreenRoutes"
import {GeneralSettingsFullpage} from "../../../classbased/GeneralSettingsFullpage/GeneralSettingsFullpage";

// Translation schema for typo safety
const s = _schema.system.tabrouter.stackrouters.settingsscreen // for readability

export const routesConfig: NavigationRouteConfigMap = {
    [routes.SettingsScreen]: {
        screen: GeneralSettingsFullpage, // which component to load

        navigationOptions: () => ({
            title: t(s.settings.title), // which title to show in navbar
            headerTitleStyle: styles.headerTitleStyle,
        }),
    },
}
