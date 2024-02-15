import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: '#7DB9B6'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  pageBtn: {
    backgroundColor: '#4D455D',
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 20,
    alignItems: 'center',
    marginTop: 20,
  },
  pageBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {styles};
