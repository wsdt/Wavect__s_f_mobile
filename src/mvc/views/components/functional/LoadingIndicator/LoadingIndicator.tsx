import * as React from 'react'
import {ActivityIndicator, View} from 'react-native'
import globalStyles from '../../../GlobalStyles.css'

/** Convenience component to make loadingIndicator more concise. */
export const LoadingIndicator = () => {
    return <View style={globalStyles.absoluteCenter}><ActivityIndicator size='large' color='#000000' /></View>
}
