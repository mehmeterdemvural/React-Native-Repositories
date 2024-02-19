import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 85,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#F1DBBF',
    borderBottomRightRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {marginLeft: 10},
  categoryImage: {height: 90, width: 90, resizeMode: 'contain'},
  categoryTextContainer: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  categoryText: {
    fontSize: 20,
    color: '#AA5656',
    paddingLeft: 50,
  },
});

export {styles};
