import * as React from "react"
import { View } from "react-native"
import { Image } from "react-native-elements"
import Modal from "react-native-modal"
import { AppText } from "../AppText/AppText"
import styles from "./ChallengeInformationModal.css"

export const ChallengeInformationModal: React.FunctionComponent<any> = props => {
    // const { instruction, intention, privacy, misc } = props.information
    const { isVisible } = props
    // add the reward [Backend]!
    const { instruction } = props.information

    return (
        <View>
            <Modal isVisible={isVisible} propagateSwipe={true}>
                <View style={styles.innerContent}>
                    <View style={styles.closeIcon}>
                        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/09/26/10/45/delete-462216_960_720.png" }} style={styles.image} />
                    </View>

                    <View style={styles.centeredInnerContent}>
                        <Image source={{ uri: "https://cdn.icon-icons.com/icons2/67/PNG/512/info_13213.png" }} style={styles.image} />
                        <AppText style={styles.centeredText}> {instruction} </AppText>
                        <View
                            style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 2,
                                width: "90%",
                                margin: 15,
                            }}
                        />

                        <Image source={{ uri: "https://icon-library.net/images/gift-png-icon/gift-png-icon-2.jpg" }} style={styles.image} />
                        <AppText style={styles.centeredText}> Unter allen gelösten Challenges wird ein € 5,00 Gutschein von Amazon verlost.</AppText>
                        <AppText style={styles.ending}> Viel Glück! </AppText>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
