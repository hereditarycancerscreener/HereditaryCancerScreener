import { StyleSheet } from 'react-native';
// import "@fontsource/sora";

export const styles = StyleSheet.create({
    responseButtonContainer: {
        // marginTop: 40,
        alignItems: 'center'
    },
    responseButton: {
        marginBottom: 15,
        paddingVertical: 11,
        paddingHorizontal: 20,
        borderWidth: 0.75,
        borderRadius: 50,
        borderColor: "#951CBA",
        width: '80%'
    },
    responseButtonActive: {
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#951CBA",
        width: '80%'
    },
    responseButtonText: {
        fontFamily: "Sora",
        fontSize: 18,
        color: '#951CBA',
        textAlign: 'center'
    },
    responseButtonTextActive: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    checkboxLabel: {
        fontSize: 18,
        marginLeft: 8
    }
});
