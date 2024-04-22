import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 100,
    marginLeft: 50,
    marginRight: 50,
    // backgroundColor: '#A11CB5', // old
    backgroundColor: '#951CBA',
  }
});
