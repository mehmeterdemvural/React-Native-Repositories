import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7DB9B6'},
  innerContainer: {flex: 1},
  lottieContainer: {
    height: Dimensions.get('window').height / 2,
    paddingTop: 50,
    flex: 1,
  },
  titleContainer: {
    height: Dimensions.get('window').height / 3.5,
    padding: 5,
    justifyContent: 'center',
  },
  progress: {marginTop: 5},
  lottieInnerContainer: {width: '100%', height: 145},
  lottie: {flex: 1, marginTop: 10},
  title: {
    color: '#4D455D',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  desc: {
    color: '#4D455D',
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 10,
  },
  bodyContainer: {
    padding: 5,
    justifyContent: 'center',
    flex: 1,
  },

  buttonContainer: {
    height: Dimensions.get('window').height / 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  button: {flex: 1},
  radioContainer: {flexDirection: 'row'},
  radioInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FCFFE7',
    margin: 5,
    borderRadius: 5,
    padding: 2,
  },
  genderText: {fontWeight: 'bold', color: '#4D455D', fontSize: 15},
  selectBirthdayButton: {
    backgroundColor: '#FCFFE7',
    borderRadius: 5,
    marginHorizontal: 40,
    padding: 5,
  },
  selectBirthdayButtonText: {
    color: '#F0A04B',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  ageContainer: {
    margin: 30,
    backgroundColor: '#4D455D',
    borderRadius: 5,
    marginHorizontal: 80,
    padding: 5,
    alignItems: 'center',
  },
  ageText: {
    color: '#F0A04B',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBox: {
    marginTop: 20,
    height: '100%',
  },
});

export {styles};
