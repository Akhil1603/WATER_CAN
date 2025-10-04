import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function OTPScreen({ navigation }: any) {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const onChange = (index: number, value: string) => {
    const next = [...code];
    next[index] = value.replace(/\D/g, '').slice(0, 1);
    setCode(next);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verify Phone Number</Text>
      <Text style={styles.sub}>Enter 6-digit code sent to +91 98765 43210</Text>

      <View style={styles.boxRow}>
        {code.map((d, i) => (
          <TextInput
            key={i}
            value={d}
            onChangeText={(v) => onChange(i, v)}
            keyboardType="number-pad"
            style={styles.box}
            maxLength={1}
          />
        ))}
      </View>

      <Text style={styles.timer}>Resend OTP in 00:45</Text>

      <Button title="Verify" onPress={() => navigation.replace('Main')} variant="coral" style={{ marginTop: 16 }} />

      <Text style={styles.resend}>Didn't receive code? <Text style={{ color: colors.primary }}>Resend</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 20, paddingTop: 48 },
  heading: { fontSize: 24, fontWeight: '800', color: '#111827' },
  sub: { marginTop: 8, color: '#6B7280' },
  boxRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  box: { width: 48, height: 56, borderRadius: 12, borderWidth: 1, borderColor: colors.primary, textAlign: 'center', fontSize: 20 },
  timer: { marginTop: 12, color: '#6B7280' },
  resend: { marginTop: 12, color: '#374151' }
});
