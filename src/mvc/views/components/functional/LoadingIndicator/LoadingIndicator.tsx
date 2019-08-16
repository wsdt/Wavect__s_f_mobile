import * as React from 'react'
import { ActivityIndicator } from 'react-native'

import globalStyles from '../../../GlobalStyles.css'
import { Fade } from '../../classbased/_animations/Fade/Fade'

/** Convenience component to make loadingIndicator more concise. */
export const LoadingIndicator = () => {
    return (
        <Fade visible={true} fadeDuration={300} containerStyle={globalStyles.absoluteCenter}>
            <ActivityIndicator size='large' color='#000000' />
        </Fade>
    )
}
