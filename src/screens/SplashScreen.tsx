import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import { colors } from '@theme/colors';

export default function SplashScreen({ navigation }: any) {
  const bounce = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, { toValue: -6, duration: 500, useNativeDriver: true, easing: Easing.inOut(Easing.quad) }),
        Animated.timing(bounce, { toValue: 0, duration: 500, useNativeDriver: true, easing: Easing.inOut(Easing.quad) })
      ])
    ).start();

    const timer = setTimeout(() => navigation.replace('Onboarding'), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>AquaSwift</Text>
      </View>
      <View style={styles.bubbles}>
        {[0, 1, 2].map((i) => (
          <Animated.View key={i} style={{ transform: [{ translateY: bounce }], marginHorizontal: 6 }}>
            <View style={styles.drop} />
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoWrap: { alignItems: 'center', marginBottom: 24 },
  logo: { width: 80, height: 80, borderRadius: 24, backgroundColor: '#E6F4FF' },
  title: { marginTop: 12, fontSize: 24, color: colors.primary, fontWeight: '800' },
  bubbles: { flexDirection: 'row', marginTop: 8 },
  drop: { width: 10, height: 14, backgroundColor: colors.secondary, borderRadius: 10 }
});
