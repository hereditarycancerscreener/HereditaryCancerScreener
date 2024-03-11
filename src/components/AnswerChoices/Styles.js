import { StyleSheet } from 'react-native';
// import "@fontsource/sora";

export const styles = StyleSheet.create({
    responseButtonContainer: {
        marginTop: 60,
        alignItems: 'center'
    },
    responseButton: {
        marginBottom: 15,
        paddingVertical: 11,
        paddingHorizontal: 20,
        borderWidth: 0.75,
        borderRadius: 50,
        borderColor: "#A11CB5",
        width: '80%'
    },
    responseButtonActive: {
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 0.75,
        borderRadius: 20,
        backgroundColor: "#A11CB5",
        width: '80%'
    },
    responseButtonText: {
        fontFamily: "Sora",
        fontSize: 20,
        color: '#A11CB5',
        textAlign: 'center'
    },
    responseButtonTextActive: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    },
    submitButton: {
        marginTop: 20,
        width: '80%'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    checkboxLabel: {
        fontSize: 25,
        color: '#400090',
        marginLeft: 8
    }
});
