import React from "react"
import { View } from "react-native"
import { Button, Icon } from "react-native-elements"
import styles from "./MajorButton.css"
import { IMajorButtonProps } from "./MajorButton.props"

export const MajorButton: React.FunctionComponent<IMajorButtonProps> = props => {
    // TODO: Allow to provide custom style obj (merge here) e.g. flex dynamic

    let containerStyle
    let titleStyle = styles.btnTitleStandard
    switch (props.btnType) {
        case MajorBtnType.PRIMARY:
            containerStyle = styles.primaryBtnContainer
            break
        case MajorBtnType.SECONDARY:
            containerStyle = styles.secondaryBtnContainer
            break
        case MajorBtnType.HIGHLIGHTED:
            containerStyle = styles.highlightedBtnContainer
            titleStyle = styles.btnTitleHighlighted
            break
    }

    const { title, onPress, icon } = props
    return (
        <View style={containerStyle}>
            <Button
                title={title}
                type="outline"
                titleStyle={titleStyle}
                buttonStyle={styles.btnStyleWithBorder}
                onPress={onPress}
                loading={props.isLoading}
                icon={(icon) ? <Icon name={icon} type="font-awesome" /> : undefined}
            />
        </View>
    )
}

export enum MajorBtnType {
    PRIMARY,
    SECONDARY,
    HIGHLIGHTED,
}
