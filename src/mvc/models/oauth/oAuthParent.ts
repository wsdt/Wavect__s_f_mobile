import { notImplementedAsync } from "../../controllers/WarningsController"

export abstract class OAuthParent {
    public static authenticate = (): Promise<string> => {
        return notImplementedAsync()
    }
}
