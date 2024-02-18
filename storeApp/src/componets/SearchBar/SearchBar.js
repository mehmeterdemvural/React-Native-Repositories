import React from 'react';
import {TextInput} from 'react-native';

import {styles} from './SearchBar.Styles';

function SearchBar({setSearchArea}) {
  return (
    <TextInput
      style={styles.container}
      placeholder="Find ..."
      placeholderTextColor={'#3A98B9'}
      onChangeText={setSearchArea}
    />
  );
}

export default SearchBar;
