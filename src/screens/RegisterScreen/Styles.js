import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeBackground: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '40%'
    },
    registerInputsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%'
    },
    registerInputContainer: {
      width: '58%',
      borderColor: "#850998",
      borderBottomWidth: 0.7
    },
    registerInputText: {
      marginBottom: -5,
      margin: 5,
      fontSize: 15
    },
    registerButton: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 15,
      paddingTop: 10,
      paddingBottom: 10,
      width: '40%',
      borderRadius: 20,
      backgroundColor: "#A11CB5" 
    },
    registerButtonText: {
      textAlign: 'center',
      color: "#fff",
      fontSize: 16
    },
    logInTextContainer: {
      flexDirection: 'row'
    },
    logInText: {
      color: "#858585",
      fontSize: 15
    }
  });
