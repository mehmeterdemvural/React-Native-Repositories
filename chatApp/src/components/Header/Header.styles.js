import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#4D455D',
    backgroundColor: '#7DB9B6',
    paddingTop: 30,
  },
  leftInnerContainer: {width: 50},
  centerInnerContainer: {flex: 1, alignItems: 'center'},
  rightInnerContainer: {width: 50, alignItems: 'center'},
  headerText: {color: '#4D455D', fontWeight: 'bold', fontSize: 20},
});

export {styles};
