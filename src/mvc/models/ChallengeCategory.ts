/** Enum does not allow require or dynamic strings. But useful for type-safety. */

import { ICO_ENVIRONMENT, ICO_HEALTH, ICO_SOCIETY } from '../../assets/AssetIndex'
import * as _schema from '../../assets/translations/_schema.json'

export enum ChallengeCategory {
    ENVIRONMENT = 'ENVIRONMENT',
    HEALTH = 'HEALTH',
    SOCIETY = 'SOCIETY',
}

/** Require does not allow dynamic strings!
 * Translation method has to be provided from view, as non-views don't have access to it. */
export const CHALLENGE_CATEGORIES = (t:any) => {
    return {
    [ChallengeCategory.ENVIRONMENT]: {
        descr:  t(_schema.models.challenge_category.environment.descr),
        icon: ICO_ENVIRONMENT,
    },
    [ChallengeCategory.HEALTH]: {
        descr:  t(_schema.models.challenge_category.health.descr),
        icon: ICO_HEALTH,
    },
    [ChallengeCategory.SOCIETY]: {
        descr: t(_schema.models.challenge_category.social.descr),
        icon: ICO_SOCIETY,
    },
}}
