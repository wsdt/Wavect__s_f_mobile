import { FontType } from '../../functional/AppText/AppText.enum';
export declare const styles: {
    containerStyle: {
        textAlign: "center";
    };
    cardStyle: {
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
    };
    topBar: {
        position: "relative";
        top: number;
        left: number;
        right: number;
        backgroundColor: string;
        opacity: number;
        height: number;
    };
    imageStyle: {
        flex: number;
        alignSelf: "center";
        width: string;
        height: string;
    };
    roundImageContainer: {
        top: number;
        position: "absolute";
        height: number;
        width: number;
        borderRadius: number;
        borderColor: string;
        backgroundColor: string;
        borderWidth: number;
        overflow: "hidden";
        margin: number;
        opacity: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    centered: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
        padding: number;
    };
    boldHeadline: {
        fontSize: number;
        color: string;
        textAlign: "center";
    };
    buttonContainer: {
        margin: number;
        flexDirection: "row";
        width: string;
        justifyContent: "center";
    };
    icon: {
        marginRight: number;
        marginLeft: number;
        marginBottom: number;
    };
    iconProps: {
        width: number;
        height: number;
    };
    socialMedia: {
        position: "absolute";
        bottom: number;
        right: number;
        flexDirection: "row";
        justifyContent: "flex-end";
    };
    sponsorName: {
        position: "absolute";
        right: number;
        flexDirection: "row";
        justifyContent: "center";
        color: string;
        fontWeight: "bold";
        fontStyle: "italic";
        fontSize: number;
        marginRight: number;
        marginTop: number;
    };
    cardTitleStyle: {
        fontFamily: FontType;
        fontSize: number;
    };
    cardContainerStyle: {
        textAlign: "center";
        justifyContent: "center";
        alignItems: "center";
    };
    cardDivider: {
        width: string;
        margin: number;
    };
    cardText: {
        fontSize: number;
        textAlign: "center";
    };
};
