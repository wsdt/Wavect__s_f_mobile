declare const styles: {
    containerStyle: {
        height: string;
        alignItems: "center";
        justifyContent: "center";
    };
    title: {
        fontSize: number;
        alignItems: "center";
        fontWeight: "bold";
        textAlign: "center";
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
        marginBottom: number;
        marginTop: number;
        letterSpacing: number;
    };
    headerText: {
        textAlign: "center";
        fontWeight: "bold";
        fontSize: number;
    };
    blockText: {
        textAlign: "center";
        padding: number;
        marginLeft: number;
        marginRight: number;
        fontSize: number;
        marginBottom: number;
    };
    backButton: {
        justifyContent: "flex-end";
    };
};
export default styles;
