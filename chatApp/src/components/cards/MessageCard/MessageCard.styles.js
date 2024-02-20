import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: '#F5E9CF',
    padding: 5,
    borderRadius: 10,
    width: (Dimensions.get('window').width * 3) / 4,
    alignSelf:'flex-end'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {color: '#E96479', fontWeight: 'bold', fontSize: 15},
  date: {color: '#4D455D', textAlign: 'right', fontSize: 10},
  text: {color: '#4D455D', fontSize: 12, marginVertical: 5},
});
export {styles};
