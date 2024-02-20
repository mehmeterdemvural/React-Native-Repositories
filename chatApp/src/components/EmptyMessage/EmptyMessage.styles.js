import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5E9CF',
    margin: 10,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.9,
    justifyContent: 'center',
  }, text:{
    color:'#E96479', fontWeight: 'bold'
  }
});

export {styles};
