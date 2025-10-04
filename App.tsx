import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/navigation';
import { Screen } from '@components/Themed';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { colors } from '@theme/colors';

export default function App() {
  const [loaded] = useFonts({
    Poppins_700Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    Inter_400Regular: require('./assets/fonts/Inter-Regular.ttf'),
    Inter_600SemiBold: require('./assets/fonts/Inter-SemiBold.ttf')
  });

  if (!loaded) {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={colors.primary} />
      </Screen>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <RootNavigation />
    </>
  );
}
