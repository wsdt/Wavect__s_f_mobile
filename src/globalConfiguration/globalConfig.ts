import {routes} from "../mvc/views/components/system/Router/Routes"

/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
export const START_PAGE = routes.DashboardTabScreen

/** How do we reach our backend API/GraphQL */
export const BACKEND_URL = "http://10.0.0.22:8090"
