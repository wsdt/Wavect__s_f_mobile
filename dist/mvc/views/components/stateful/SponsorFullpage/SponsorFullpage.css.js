"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'gray',
        opacity: 0.8,
        height: 120,
    },
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
    },
    roundImageContainer: {
        top: 0,
        position: 'absolute',
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 500,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderWidth: 2,
        overflow: 'hidden',
        margin: 10,
        opacity: 1,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    boldHeadline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'gray',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonContainer: {
        margin: 15,
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    socialMedia: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    sponsorName: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#ccc',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 50,
        marginRight: 20,
        marginTop: 20,
    },
    blockText: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
    },
});
//# sourceMappingURL=SponsorFullpage.css.js.map