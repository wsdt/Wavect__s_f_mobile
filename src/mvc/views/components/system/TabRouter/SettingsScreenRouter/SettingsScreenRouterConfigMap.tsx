import { NavigationRouteConfigMap } from 'react-navigation'
import * as _schema from '../../../../../../assets/translations/_schema.json'
import { t } from '../../../../../controllers/MultiLingualityController/MultiLingualityController'
import { SettingsScreen } from '../../../../pages/SettingsScreen/SettingsScreen'
import { routes } from './SettingsRoutes'

export const routesConfig: NavigationRouteConfigMap = {
    [routes.SettingsScreen]: {
        screen: SettingsScreen, // which component to load
        navigationOptions: () => ({
            title: t(_schema.system.tabrouter.stackrouters.settingsscreen.settings.title), // which title to show in navbar
        }),
    },
}
