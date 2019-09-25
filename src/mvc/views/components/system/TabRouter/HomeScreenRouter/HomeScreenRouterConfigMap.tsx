// @ts-ignore
import { NavigationParams, NavigationRoute, NavigationRouteConfigMap } from 'react-navigation'
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack'
import * as _schema from '../../../../../../assets/translations/_schema.json'
import { t } from '../../../../../controllers/MultiLingualityController/MultiLingualityController'
import { HomeScreen } from '../../../../pages/HomeScreen/HomeScreen'
import SponsorFullpage from '../../../classbased/SponsorFullpage/SponsorFullpage'
import styles from './../TabRouter.css'
import { routes } from './HomeRoutes'

// Translation schema for typo safety
const s = _schema.system.tabrouter.stackrouters // for readability

export const routesConfig: NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp<NavigationRoute<NavigationParams>>> = {
    [routes.HomeScreen]: {
        screen: HomeScreen, // which component to load
        navigationOptions: () => ({
            title: t(s.homescreen.home.title), // which title to show in navbar
            headerTitleStyle: styles.headerTitleStyle,
        }),
    },
    [routes.SponsorFullpage]: {
        screen: SponsorFullpage,
        navigationOptions: () => ({
            title: t(s.homescreen.sponsor.title), // which title to show in navbar
        }),
    },
}
