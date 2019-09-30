/** Enum does not allow require or dynamic strings. But useful for type-safety. */
import * as _schema from '../../assets/translations/_schema.json'
import {ASSET_URL} from '../../globalConfiguration/globalConfig'
import {logEvent, LogType} from '../controllers/LoggingController/LoggingController'

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
            icon: `${ASSET_URL}/img/icons/challenge_type/environment.png`,
        },
        [ChallengeCategory.HEALTH]: {
            descr: t(s.health.descr),
            icon: `${ASSET_URL}/img/icons/challenge_type/health.png`,
        },
        [ChallengeCategory.SOCIETY]: {
            descr: t(s.social.descr),
            icon: `${ASSET_URL}/img/icons/challenge_type/society.png`,
        },
    }
    try {
        return schema[category]
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:CHALLENGE_CATEGORIES`,`Wrong challenge category provided -> ${category}`)
        return null
    }
}
