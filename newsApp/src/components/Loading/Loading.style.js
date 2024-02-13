import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // Add the following code to blur the background
    zIndex: 999,
  },
});

export default styles;
