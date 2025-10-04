import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { colors } from '@theme/colors';
import SplashScreen from '@screens/SplashScreen';
import OnboardingSlides from '@screens/Onboarding/OnboardingSlides';
import LoginScreen from '@screens/Auth/LoginScreen';
import OTPScreen from '@screens/Auth/OTPScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import BookingScreen from '@screens/Orders/BookingScreen';
import ConfirmOrderScreen from '@screens/Orders/ConfirmOrderScreen';
import OrderSuccessScreen from '@screens/Orders/OrderSuccessScreen';
import TrackingScreen from '@screens/Orders/TrackingScreen';
import WalletScreen from '@screens/Wallet/WalletScreen';
import SubscriptionScreen from '@screens/Subscription/SubscriptionScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import HelpSupportScreen from '@screens/Support/HelpSupportScreen';
import NotificationsScreen from '@screens/Orders/NotificationsScreen';
import MyOrdersScreen from '@screens/Orders/MyOrdersScreen';
import ReferralScreen from '@screens/Profile/ReferralScreen';
import BottleTrackingScreen from '@screens/Profile/BottleTrackingScreen';

// Placeholders to be replaced by real screens
const Placeholder = ({ label }: { label: string }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{label}</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={MyOrdersScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={HelpSupportScreen} />
    </Tab.Navigator>
  );
}

const navTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background }
};

export default function RootNavigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingSlides} />
        <Stack.Screen name="Auth" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Confirm" component={ConfirmOrderScreen} />
        <Stack.Screen name="Success" component={OrderSuccessScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="Subscriptions" component={SubscriptionScreen} />
        <Stack.Screen name="Support" component={HelpSupportScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Referral" component={ReferralScreen} />
        <Stack.Screen name="Bottles" component={BottleTrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
