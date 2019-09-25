import {NavigationParams, NavigationRoute, NavigationRouteConfigMap} from 'react-navigation'
import {NavigationStackOptions, NavigationStackProp} from 'react-navigation-stack'
import * as _schema from '../../../../../../assets/translations/_schema.json'
import { t } from '../../../../../controllers/MultiLingualityController/MultiLingualityController'
import { GeneralSettingsFullpage } from '../../../classbased/GeneralSettingsFullpage/GeneralSettingsFullpage'
import {PersonalSettingsFullpage} from '../../../classbased/PersonalSettingsFullpage/PersonalSettingsFullpage'
import styles from '../TabRouter.css'
import { routes } from './GeneralSettingsScreenRoutes'

// Translation schema for typo safety
const s = _schema.system.tabrouter.stackrouters.settingsscreen // for readability

export const routesConfig: NavigationRouteConfigMap<NavigationStackOptions,NavigationStackProp<NavigationRoute<NavigationParams>>> = {
    [routes.GeneralSettingsScreen]: {
        screen: GeneralSettingsFullpage, // which component to load

        navigationOptions: () => ({
            title: t(s.settings.title), // which title to show in navbar
            headerTitleStyle: styles.headerTitleStyle,
        }),
    },
    [routes.PersonalSettingsFullpage]: {
        screen: PersonalSettingsFullpage,
        navigationOptions: () => ({
            title: t(s.settings.title),
            headerTitleStyle: styles.headerTitleStyle,
        }),
    },
}
