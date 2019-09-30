import * as React from 'react'
import {View} from 'react-native'
import FastImage from 'react-native-fast-image'
import Modal from 'react-native-modal'
import {ASSET_URL} from '../../../../../globalConfiguration/globalConfig'
import {AppText} from '../AppText/AppText'
import styles from './ChallengeInformationModal.css'
import {IChallengeInformationModalProps} from './ChallengeInformationModal.props'

export const ChallengeInformationModal: React.FunctionComponent<any> = (props: IChallengeInformationModalProps) => {
    // const { instruction, intention, privacy, misc } = props.information
    const {isVisible} = props
    // add the reward [Backend]!
    const {instruction, reward, privacy, misc} = props.information

    return (
        <View>
            <Modal isVisible={isVisible} propagateSwipe={true}>
                <View style={styles.innerContent}>
                    <View style={styles.closeIcon}>
                        <FastImage source={{
                            priority: FastImage.priority.high,
                            uri: `${ASSET_URL}/img/icons/dialog/close.png`}} style={styles.image}/>
                    </View>

                    <View style={styles.centeredInnerContent}>
                        <FastImage source={{
                            priority: FastImage.priority.normal,
                            uri: `${ASSET_URL}/img/icons/dialog/info.png`}} style={styles.image}
                                   resizeMode='contain'/>
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

                        <FastImage source={{
                                priority: FastImage.priority.normal,
                                uri: `${ASSET_URL}/img/icons/dialog/privacy.png`
                            }} style={styles.image}/>
                        <AppText style={styles.centeredText}>{privacy}</AppText>

                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                width: '90%',
                                margin: 10,

                            }}
                        />
                        <FastImage source={{
                            priority: FastImage.priority.normal,
                            uri: `${ASSET_URL}/img/icons/dialog/gift.png`}} style={styles.image}
                                   resizeMode='contain'/>
                        <AppText style={styles.centeredText}>{reward} {misc}</AppText>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
