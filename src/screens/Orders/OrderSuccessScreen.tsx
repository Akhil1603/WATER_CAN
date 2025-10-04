import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function OrderSuccessScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.center}>
        <View style={styles.check} />
        <Text style={styles.title}>Order Placed Successfully! 🎉</Text>
        <Text style={styles.sub}>#AQ12345</Text>
      </View>

      <Card>
        <Text style={styles.sectionTitle}>Order Details</Text>
        <Text>2 Water Cans</Text>
        <Text>Delivery: Tomorrow, 5 Oct</Text>
        <Text>Morning Slot (6-10 AM)</Text>
        <Text>To: Home, Jubilee Hills</Text>
      </Card>

      <Card style={{ backgroundColor: colors.primary }}>
        <Text style={{ color: colors.white, fontWeight: '800' }}>Expected Delivery</Text>
        <Text style={{ color: colors.white, fontSize: 18, fontWeight: '800' }}>Tomorrow, 8:30 AM</Text>
        <Text style={{ color: colors.white }}>You'll receive notification when order is dispatched</Text>
      </Card>

      <Card>
        <Text>₹120 deducted from wallet</Text>
        <Text>New Balance: ₹730</Text>
      </Card>

      <Button title="Track Order" variant="coral" onPress={() => navigation.replace('Tracking')} />
      <Button title="Back to Home" variant="outline" onPress={() => navigation.replace('Main')} style={{ marginTop: 8 }} />

      <View style={{ alignItems: 'center', marginTop: 12 }}>
        <Text style={{ color: '#374151' }}>Need Help?</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  center: { alignItems: 'center', marginTop: 24, marginBottom: 12 },
  check: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#DCFCE7', marginBottom: 12 },
  title: { fontSize: 24, fontWeight: '800' },
  sub: { color: '#6B7280' },
  sectionTitle: { fontWeight: '800', marginBottom: 8, color: '#111827' }
});
