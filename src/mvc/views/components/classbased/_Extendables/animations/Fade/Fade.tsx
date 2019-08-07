import {PureComponent} from 'react'
import * as React from 'react'
import {Animated} from 'react-native'
import {IFadeProps} from './Fade.props'
import {IFadeState} from './Fade.state'

export class Fade extends PureComponent<IFadeProps, IFadeState> {

    public state: IFadeState = {
        opacity: new Animated.Value(0)
    }

    constructor(props: IFadeProps) {
        super(props)


        Animated.timing(this.state.opacity, {
            toValue: this.props.visible ? 1 : 0,
            duration: this.props.fadeDuration,
        }).start()
    }


    public render() {
        const {visible, containerStyle, children, ...rest} = this.props

        return (
            <Animated.View style={[containerStyle, {opacity: this.state.opacity}]} {...rest}>
                {children}
            </Animated.View>
        )
    }
}