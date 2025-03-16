import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeBackground: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fbfbfb'
    },
    logo: {
      marginTop: 60,
      margin: 10,
      width: 235,
      height: 230
    },
    logInInputsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%'
    },
    logInInputContainer: {
      width: '45%',
      borderColor: '#951CBA',
      borderBottomWidth: 0.7
    },
    logInInputText: {
      margin: 10,
      fontSize: 15
    },
    logInButton: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 15,
      paddingTop: 10,
      paddingBottom: 10,
      width: '40%',
      borderRadius: 20,
      // backgroundColor: "#94308a" // from logo
      // backgroundColor: '#A323B6' // too bright?
      backgroundColor: '#951CBA'
    },
    logInButtonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
    },
    registrationTextContainer: {
      flexDirection: 'row'
      // justifyContent: 'space-between'
    },
    registerText: {
      color: '#858585',
      fontSize: 15
    }
  });
