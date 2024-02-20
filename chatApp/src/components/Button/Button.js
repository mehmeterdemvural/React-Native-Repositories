import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {styles} from './Button.styles';

function Button({text, loading, handleSubmit}) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={handleSubmit}
      disabled={loading}>
      <Text style={styles.buttonText}>
        {loading ? <ActivityIndicator size="small" color="#E96479" /> : text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
