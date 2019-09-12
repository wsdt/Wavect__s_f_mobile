import { tabRoutes } from '../mvc/views/components/system/TabRouter/TabRoutes'

// NOTE: Following constants use the __DEV__ var to ensure that this only has an impact on debug builds!
export const useLocalBackend: boolean = __DEV__ && true // please always set to false before pushing
export const disableCache: boolean = __DEV__ && true // disables local app cache (only disable for debugging)
export const useReactotron: boolean = __DEV__ && true // strong debugging tool

/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
export const START_PAGE = tabRoutes.HomeScreen

/** How do we reach our backend API/GraphQL */
export const BACKEND_URL = useLocalBackend ? 'https://197750be.ngrok.io' : 'https://api.dev.wavect.io'

export const BACKEND_MOBILE_API = `${BACKEND_URL}/api/mobile/v1`
