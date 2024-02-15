import React from 'react';

import Router from './Router';

// Contexts
import {AuthProvider} from './contexts/AuthContext';
import {FavoriteProvider} from './contexts/FavoriteContext';
import {SubmitProvider} from './contexts/SubmitContext';

// FlashMessage
import FlashMessage from 'react-native-flash-message';

function Wrapper() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <SubmitProvider>
          <Router />
          <FlashMessage position="top" />
        </SubmitProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}

export default Wrapper;
