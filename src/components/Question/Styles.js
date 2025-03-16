import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    questionContainer: {
    },
    questionText: {
      marginLeft: 50,
      marginRight: 50,
      textAlign: 'center',
      fontSize: 23,
      color: "#000",

      // fontFamily: "Sinhala Sangam MN",
    },
    learningStarOpenButton: {
      paddingLeft: 10
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    learningStarView: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%',
      width: '87.5%',
      borderRadius: 10,
      backgroundColor: '#fbfbfb',
      padding: 20
    },
    learningStarText: {
      fontSize: 17,
      color: "#000",
      alignSelf: 'center'
    },
    learningStarCloseButton: {
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
      backgroundColor: '#951CBA',
      borderRadius: 15,
    },
});
