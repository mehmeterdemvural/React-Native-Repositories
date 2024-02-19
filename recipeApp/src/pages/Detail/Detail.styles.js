import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#698269'},
  image: {flex: 1, height: 250, marginVertical: 10, resizeMode: 'contain'},
  title: {fontWeight: 'bold', fontSize: 25, color: '#AA5656', margin: 5},
  area: {fontSize: 15, color: '#AA5656', margin: 5},
  divider: {borderWidth: 0.5, borderColor: '#EDDBC7'},
  desc: {fontSize: 13, textAlign: 'justify', color: '#F8EAD8', margin: 5},
  buttonContainer: {
    backgroundColor: '#F1DBBF',
    margin: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: '#AA5656',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export {styles};
