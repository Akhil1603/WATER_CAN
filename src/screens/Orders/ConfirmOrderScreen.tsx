import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function ConfirmOrderScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Text style={styles.title}>Confirm Order</Text>
      <Text style={styles.step}>Step 3 of 4</Text>

      <Card style={{ borderTopWidth: 3, borderTopColor: colors.primary }}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <Text>2 × 15L Water Cans</Text>
        <Text>Delivery: Tomorrow, Morning</Text>
        <Text>Address: Home, Jubilee Hills</Text>
        <Text style={styles.link}>View Details ></Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text>Subtotal (2 cans): ₹120</Text>
        <Text>
          Delivery Charges: <Text style={styles.strike}>₹40</Text> <Text style={styles.free}>FREE</Text>
        </Text>
        <View style={styles.dots} />
        <Text style={styles.total}>Total Amount: ₹120</Text>
        <Text style={styles.note}>Amount will be deducted from wallet</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text style={styles.sectionTitle}>Wallet</Text>
        <Text>Wallet Balance: ₹850</Text>
        <Text style={{ color: '#16A34A' }}>Remaining: ₹730</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text style={styles.sectionTitle}>Special Instructions (Optional)</Text>
        <TextInput placeholder="Add delivery instructions (optional)" style={styles.textarea} multiline maxLength={150} />
        <Text style={styles.counter}>0/150</Text>
      </Card>

      <View style={styles.row}>
        <View style={styles.checkbox} />
        <Text>I agree to the cancellation policy <Text style={styles.link}>View Policy</Text></Text>
      </View>

      <Button title="Confirm & Pay ₹120" onPress={() => navigation.navigate('Success')} />
      <Text style={styles.secure}>100% secure payment</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 20, fontWeight: '800' },
  step: { color: colors.primary, fontWeight: '700' },
  sectionTitle: { fontWeight: '800', color: '#111827', marginBottom: 8 },
  link: { color: colors.primary, marginTop: 8 },
  strike: { textDecorationLine: 'line-through', color: '#6B7280' },
  free: { color: '#16A34A', fontWeight: '800' },
  dots: { borderStyle: 'dotted', borderWidth: 1, borderColor: '#D1D5DB', marginVertical: 8 },
  total: { fontSize: 18, fontWeight: '800' },
  note: { color: '#6B7280' },
  textarea: { borderWidth: 1, borderRadius: 12, borderColor: '#E5E7EB', minHeight: 80, padding: 12 },
  counter: { alignSelf: 'flex-end', color: '#6B7280', marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 12 },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 4, marginRight: 8 },
  secure: { marginTop: 8, color: '#6B7280', textAlign: 'center' }
});
