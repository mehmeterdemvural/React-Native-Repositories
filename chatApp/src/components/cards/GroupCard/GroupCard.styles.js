import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: '#F5E9CF',
    padding: 5,
    borderRadius: 10,
    height: 50,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {width: '15%'},
  nameContainer: {width: '85%'},
  username: {color: '#E96479', fontWeight: 'bold', fontSize: 15},
});
export {styles};
