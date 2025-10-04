import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Image source={require('../../../assets/icon.png')} style={styles.droplet} />
        <Text style={styles.title}>Welcome to AquaSwift</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.label}>Mobile Number</Text>
        <Input placeholder="Enter mobile number" keyboardType="phone-pad" />
      </View>

      <Button title="Send OTP" onPress={() => navigation.navigate('OTP')} style={{ marginTop: 16 }} />

      <Text style={styles.terms}>
        By continuing, you agree to our <Text style={styles.link}>Terms</Text> & <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <View style={styles.badges}>
        <Text style={styles.badge}>Verified</Text>
        <Text style={styles.badge}>Secure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 20, paddingTop: 48 },
  header: { alignItems: 'center', marginBottom: 24 },
  droplet: { width: 96, height: 96, borderRadius: 24, backgroundColor: '#E5F0FF' },
  title: { marginTop: 12, fontSize: 24, fontWeight: '800', color: '#111827' },
  label: { color: '#374151', marginBottom: 8, fontWeight: '600' },
  terms: { marginTop: 16, fontSize: 12, color: '#6B7280' },
  link: { color: colors.primary },
  badges: { flexDirection: 'row', marginTop: 24, gap: 8 },
  badge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, backgroundColor: '#F3F4F6', color: '#111827' }
});
