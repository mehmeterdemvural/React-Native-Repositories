import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: '#F5E9CF',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E96479',
    textAlign: 'justify',
    marginBottom: 10,
  },
  innerContainer: {flex: 1, flexDirection: 'row'},
  title: {flex: 1, fontWeight: 'bold', color: '#E96479', fontSize: 13},
  item: {color: '#4D455D', flex: 3, fontWeight: 'bold', fontSize: 13},
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  level: {
    color: '#E96479',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  buttonIcon: {
    color: '#E96479',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
});

export {styles};
