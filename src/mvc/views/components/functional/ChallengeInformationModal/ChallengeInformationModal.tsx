import * as React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Modal from 'react-native-modal'
import {GIFT, INFO, PRIVACY} from '../../../../../assets/AssetIndex'
import { AppText } from '../AppText/AppText'
import styles from './ChallengeInformationModal.css'
import {IChallengeInformationModalProps} from './ChallengeInformationModal.props'

export const ChallengeInformationModal: React.FunctionComponent<any> = (props:IChallengeInformationModalProps) => {
    // const { instruction, intention, privacy, misc } = props.information
    const { isVisible } = props
    // add the reward [Backend]!
    const { instruction, reward, privacy, misc } = props.information

    return (
        <View>
            <Modal isVisible={isVisible} propagateSwipe={true}>
                <View style={styles.innerContent}>
                    <View style={styles.closeIcon}>
                        <FastImage source={{ uri: 'https://cdn.pixabay.com/photo/2014/09/26/10/45/delete-462216_960_720.png' }} style={styles.image} />
                    </View>

                    <View style={styles.centeredInnerContent}>
                        <FastImage source={INFO} style={styles.image} resizeMode='contain' />
                        <AppText style={styles.centeredText}>{instruction}</AppText>
                        {/* add intention when enough space -> {misc}*/}
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                width: '90%',
                                margin: 10,
                            }}
                        />

                        <FastImage source={PRIVACY} style={styles.image} />
                        <AppText style={styles.centeredText}>{privacy}</AppText>

                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                width: '90%',
                                margin: 10,

                            }}
                        />
                        <FastImage source={GIFT} style={styles.image} resizeMode='contain' />
                        <AppText style={styles.centeredText}>{reward} {misc}</AppText>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
