import * as React from 'react';
import {
  DefaultTheme,
  DarkTheme
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import SafeAreaFix from './src/SafeAreaFix';
import { AuthProvider } from './src/AuthContext';
import { RootNavigator } from './src/navigation';


export default function App() {
  return (
    <AuthProvider>
        <SafeAreaFix>
          <NavigationContainer theme={DefaultTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaFix>
    </AuthProvider>
  );
}