import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider as PaperProvider} from 'react-native-paper';

import Router from './Router';
import {AuthContextProvider} from './contexts/AuthContext';
import {ModalsContextProvider} from './contexts/ModalsContext';

function Wrapper() {
  return (
    <AuthContextProvider>
      <ModalsContextProvider>
        <PaperProvider>
          <Router />
          <FlashMessage position="top" />
        </PaperProvider>
      </ModalsContextProvider>
    </AuthContextProvider>
  );
}

export default Wrapper;
