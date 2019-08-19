import { NavigationRouteConfigMap } from 'react-navigation'
import * as _schema from '../../../../../../assets/translations/_schema.json'
import { t } from '../../../../../controllers/MultiLingualityController/MultiLingualityController'
import { HomeScreen } from '../../../../pages/HomeScreen/HomeScreen'
import SponsorFullpage from '../../../classbased/SponsorFullpage/SponsorFullpage'
import { routes } from './HomeRoutes'

// Translation schema for typo safety
const s = _schema.system.tabrouter.stackrouters.homescreen // for readability

export const routesConfig: NavigationRouteConfigMap = {
    [routes.HomeScreen]: {
        screen: HomeScreen, // which component to load
        navigationOptions: () => ({
            title: t(s.home.title), // which title to show in navbar
        }),
    },
    [routes.SponsorFullpage]: {
        screen: SponsorFullpage,
        navigationOptions: () => ({
            title: t(s.sponsor.title), // which title to show in navbar
        }),
    },
}
