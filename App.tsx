/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AppProviders } from './src/providers';
import { MainStackNavigator } from './src/navigation/MainStackNavigator';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <AppProviders>
      <MainStackNavigator />
    </AppProviders>
  )
}

export default App;
