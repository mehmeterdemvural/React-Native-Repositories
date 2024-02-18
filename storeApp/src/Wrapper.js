import React from 'react';

import App from './App';
import {AuthProvider} from './contexts/AuthContext';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
