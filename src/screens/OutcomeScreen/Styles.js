import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    outcomeText: {
      fontSize: 18,
      color: '#333', // Replace with your color theme
      textAlign: 'center',
      marginBottom: 20, // Adjust as needed
    },
    startOverButton: {
      backgroundColor: '#400090', // Replace with your button color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      borderWidth: 0.75,
      borderColor: "#400090", // Replace with your border color
    },
    startOverButtonText: {
      fontSize: 25,
      color: '#FFF', // Replace with your text color
      fontFamily: 'Sinhala Sangam MN', // Replace with your font if needed
      textAlign: 'center',
    },
  });