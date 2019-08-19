import * as React from 'react'
import { Modal, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './ChallengeInformationModal.css'

export const ChallengeInformationModal: React.FunctionComponent<any> = props => {
    const { instruction, intention, privacy, misc } = props.information
    const { isVisible } = props

    return (
        <Modal presentationStyle={'fullScreen'} animationType='fade' transparent={false} visible={isVisible} onRequestClose={() => null}>
            <View>
                <View style={styles.containerStyle}>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={{
                            priority: FastImage.priority.normal,
                            uri: 'https://images.pexels.com/photos/2380451/pexels-photo-2380451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        }}

                        resizeMode={FastImage.resizeMode.cover}
                    >
                        <Text style={styles.title}> Information </Text>

                        <View>
                            <Text style={styles.headerText}> Wie kann diese Challenge gelöst werden? </Text>
                            <Text style={styles.blockText}> {instruction}</Text>
                        </View>
                        <View>
                            <Text style={styles.headerText}> Was soll diese Challenge bewirken?</Text>
                            <Text style={styles.blockText}> {intention}</Text>
                        </View>
                        <View>
                            <Text style={styles.headerText}> Was passiert mit meinen Daten?</Text>
                            <Text style={styles.blockText}> {privacy}</Text>
                        </View>
                        <View>
                            <Text style={styles.headerText}> Ich will mehr wissen </Text>
                            <Text style={styles.blockText}> {misc} </Text>
                        </View>
                    </FastImage>
                </View>
            </View>
        </Modal>
    )
}
