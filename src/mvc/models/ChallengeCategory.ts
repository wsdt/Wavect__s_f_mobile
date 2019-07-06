/** Enum does not allow require or dynamic strings. But useful for type-safety. */
import { ICO_ENVIRONMENT, ICO_HEALTH, ICO_SOCIETY } from "../../../assets/AssetIndex"

export enum ChallengeCategory {
    ENVIRONMENT = "ENVIRONMENT",
    HEALTH = "HEALTH",
    SOCIETY = "SOCIETY",
}

/** Require does not allow dynamic strings! */
export const CHALLENGE_CATEGORIES = {
    [ChallengeCategory.ENVIRONMENT]: {
        descr: "Herausforderungen dieser Kategorie fokussieren sich auf den Schutz der Umwelt.",
        icon: ICO_ENVIRONMENT,
    },
    [ChallengeCategory.HEALTH]: {
        descr: "Herausforderungen dieser Kategorie helfen dir, dir gesündere Verhaltensweisen anzueignen.",
        icon: ICO_HEALTH,
    },
    [ChallengeCategory.SOCIETY]: {
        descr: "Diese Kategorie soll gezielt Spaß machen und sozialen Wert schaffen.",
        icon: ICO_SOCIETY,
    },
}
