/** Enum does not allow require or dynamic strings. But useful for type-safety. */

import {ICO_ENVIRONMENT, ICO_HEALTH, ICO_SOCIETY} from '../../assets/AssetIndex'
import * as _schema from '../../assets/translations/_schema.json'
import {logEvent, LogType} from "../controllers/LoggingController/LoggingController";

// Translation schema for typo safety
const s = _schema.models.challenge_category // for readability
const TAG = 'ChallengeCategory'

export enum ChallengeCategory {
    ENVIRONMENT = 'ENVIRONMENT',
    HEALTH = 'HEALTH',
    SOCIETY = 'SOCIETY',
}

/** Require does not allow dynamic strings!
 * Translation method has to be provided from view, as non-views don't have access to it. */
export const CHALLENGE_CATEGORIES = (t: any, category:string) => {
    const schema:any = {
        [ChallengeCategory.ENVIRONMENT]: {
            descr: t(s.environment.descr),
            icon: ICO_ENVIRONMENT,
        },
        [ChallengeCategory.HEALTH]: {
            descr: t(s.health.descr),
            icon: ICO_HEALTH,
        },
        [ChallengeCategory.SOCIETY]: {
            descr: t(s.social.descr),
            icon: ICO_SOCIETY,
        },
    }
    try {
        return schema[category]
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:CHALLENGE_CATEGORIES`,`Wrong challenge category provided -> ${category}`)
        return null
    }
}
