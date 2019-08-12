import { NavigationRouteConfigMap } from 'react-navigation'
import * as _schema from '../../../../../../assets/translations/_schema.json'
import {t} from '../../../../../controllers/MultiLingualityController/MultiLingualityController'
import { HomeScreen } from '../../../../pages/HomeScreen/HomeScreen'
import SponsorFullpage from '../../../classbased/SponsorFullpage/SponsorFullpage'
import { routes } from './HomeRoutes'

export const routesConfig: NavigationRouteConfigMap = {
    [routes.HomeScreen]: {
        screen: HomeScreen, // which component to load
        navigationOptions: () => ({
            title: t(_schema.system.tabrouter.stackrouters.homescreen.home.title), // which title to show in navbar
        }),
    },
    [routes.SponsorFullpage]: {
        screen: SponsorFullpage,
        navigationOptions: () => ({
            title: t(_schema.system.tabrouter.stackrouters.homescreen.sponsor.title), // which title to show in navbar
        }),
    },
}
