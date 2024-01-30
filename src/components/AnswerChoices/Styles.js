import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    responseButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    responseButton: {
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 0.75,
        borderRadius: 20,
        borderColor: "#400090",
        width: '80%', // Adjust width as needed
    },
    responseButtonText: {
        fontSize: 25,
        color: '#400090',
        fontFamily: 'Sinhala Sangam MN',
        textAlign: 'center', // Ensure text is centered
    },
    submitButton: {
        marginTop: 20,
        width: '80%', // Adjust width as needed
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 25,
        color: '#400090',
        fontFamily: 'Sinhala Sangam MN',
        marginLeft: 8, // Spacing between checkbox and label
    },
    // Add other styles as needed
});
