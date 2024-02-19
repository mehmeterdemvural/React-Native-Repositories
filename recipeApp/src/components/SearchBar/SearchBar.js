import React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './searchBar.styles';

function SearchBar({setSearchArea, customPlaceholder}) {
  return (
    <TextInput
      placeholder={customPlaceholder}
      placeholderTextColor="#AA5656"
      onChangeText={setSearchArea}
      style={styles.textInput}
    />
  );
}

export default SearchBar;
