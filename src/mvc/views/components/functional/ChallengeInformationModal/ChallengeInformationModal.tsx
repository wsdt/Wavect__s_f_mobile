import {Modal, View, Text} from "react-native"
import * as React from "react"
import styles from "./ChallengeInformationModal.css"
import FastImage from "react-native-fast-image";

export const ChallengeInformationModal: React.FunctionComponent<any> = props => {
    const { instruction, intention, privacy, misc } = props.information
    const { isVisible } = props

    return (
        <Modal
            presentationStyle={'fullScreen'}
            animationType="slide"
            transparent={false} visible={isVisible}
            onRequestClose={() => null}
            >
            <View>
                <View style={styles.containerStyle}>
                    <FastImage
                        style={{width: '100%', height: '100%'}}
                        source={{
                            priority: FastImage.priority.normal,
                            uri:'https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?cs=srgb&dl=art-background-backlit-925743.jpg&fm=jpg'
                        }}
                        resizeMode={FastImage.resizeMode.cover}>

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
