import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    submitButton: {
      backgroundColor: '#A11CB5', // A different color for distinction
      paddingVertical: 12, // Slightly larger padding
      paddingHorizontal: 25,
      borderRadius: 25, // More rounded corners
      borderWidth: 1,
      borderColor: '#005757', // Border color similar but darker than the button
      marginTop: 20,
      width: '80%', // Ensure it's properly sized for the screen
      alignSelf: 'center', // Center the button
    },
    submitButtonText: {
      fontSize: 26, // Slightly larger font
      color: '#FFFFFF', // White color for the text
      textAlign: 'center',
      fontFamily: 'Sinhala Sangam MN', // Keeping the font family consistent
    },
  });