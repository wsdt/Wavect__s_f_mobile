import {Modal, View, Text} from "react-native";
import * as React from "react";
import styles from './ChallengeInformationModal.css'


export const ChallengeInformationModal: React.FunctionComponent<any> = props => {

    const { instruction, intention, privacy, misc } = props.information
    const { isVisible } = props


    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={isVisible}
            onRequestClose={() => {}
            }>

            <View style={{marginTop: 22}}>
                <View style={styles.containerStyle}>
                    <View>
                        <Text style={styles.headerText}> :-) </Text>
                        <Text> {instruction}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerText}> :-)</Text>
                        <Text> {intention}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerText}> :-)</Text>
                        <Text> {privacy}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerText}> :-)</Text>
                        <Text> {misc} </Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

