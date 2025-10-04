import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/navigation';
import { Screen } from '@components/Themed';
import { useFonts } from 'expo-font';
import {
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import {
  Inter_400Regular,
  Inter_600SemiBold
} from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';
import { colors } from '@theme/colors';

export default function App() {
  const [loaded] = useFonts({
    Poppins_700Bold,
    Inter_400Regular,
    Inter_600SemiBold
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
