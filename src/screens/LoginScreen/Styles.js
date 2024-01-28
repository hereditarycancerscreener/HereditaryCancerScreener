import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logo: {
      margin: 40,
      width: 180,
      height: 180
    },
    safeBackground: {
      display: 'flex',
      alignItems: 'center'
    },
    logInInputsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
      width: '100%'
    },
    logInInputContainer: {
      margin: 5,
      width: '50%',
      borderColor: "#850998",
      borderBottomWidth: 0.7
    },
    logInInputText: {
      margin: 5,
      fontSize: 15
    },
    logInButtonsContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    pillButtonMedium: {
      display: 'flex',
      alignItems: 'center',
      margin: 13,
      paddingTop: 10,
      paddingBottom: 10,
      width: '50%',
      borderWidth: 0.75,
      borderRadius: 20,
      borderColor: "#850998",
    },
    // pillButtonMedium: active {
  
    // },
    // pillButtonLong: {
    //   margin: 70,
    //   paddingTop: 8,
    //   paddingBottom: 8,
    //   borderWidth: 0.75,
    //   borderRadius: 20,
    //   borderColor: "#850998",
    // },
    pillButtonMediumText: {
      textAlign: 'center',
      color: "#850998",
      fontFamily: ''
    },
  });