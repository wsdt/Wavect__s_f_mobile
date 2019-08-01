import { tabRoutes } from '../mvc/views/components/system/TabRouter/TabRoutes'

export const useLocalBackend: boolean = true // please always set to false before pushing

/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
export const START_PAGE = tabRoutes.HomeScreen

/** How do we reach our backend API/GraphQL */
export const BACKEND_URL = useLocalBackend ? 'http://bfe91e6c.ngrok.io/' : 'https://api.dev.wavect.io'
export const BACKEND_MOBILE_API = `${BACKEND_URL}/api/mobile/v1`
