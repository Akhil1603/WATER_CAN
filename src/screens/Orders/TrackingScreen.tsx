import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { colors } from '@theme/colors';

export default function TrackingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Track Order</Text>
      <Text style={styles.sub}>#AQ12345</Text>

      <View style={styles.map} />

      <Card style={{ marginTop: -24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.courierAvatar} />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: '800' }}>Rajesh Kumar</Text>
            <Text style={{ color: '#6B7280' }}>4.8 ⭐ • 1,240 deliveries</Text>
          </View>
        </View>
        <Text style={{ marginTop: 8 }}>Vehicle: TS 09 XX 1234</Text>
      </Card>

      <View style={styles.timeline}>
        {[
          { title: 'Order Placed', time: '4:30 PM', done: true },
          { title: 'Order Confirmed', time: '4:32 PM', done: true },
          { title: 'Out for Delivery', time: '5:10 PM', done: false, current: true },
          { title: 'Delivered', time: '5:45 PM', done: false }
        ].map((s, i) => (
          <View key={i} style={styles.timelineRow}>
            <View style={[styles.dot, s.done ? styles.dotDone : s.current ? styles.dotCurrent : styles.dotPending]} />
            <View>
              <Text style={{ fontWeight: '700' }}>{s.title}</Text>
              <Text style={{ color: '#6B7280' }}>{s.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <Card>
        <Text style={{ fontWeight: '800' }}>Order Details</Text>
        <Text>2 × 15L Water Cans</Text>
        <Text>Evening Slot</Text>
        <Text>Total: ₹120</Text>
      </Card>

      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>Arriving in 20 mins</Text>
        <Text style={{ color: '#6B7280' }}>2.5 km away</Text>
      </View>

      <Text style={{ color: colors.primary, textAlign: 'center', marginBottom: 24 }}>Need help?</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 20, fontWeight: '800' },
  sub: { color: '#6B7280' },
  map: { height: 240, backgroundColor: '#E5E7EB', borderRadius: 16, marginTop: 12 },
  courierAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#E6F0FB' },
  timeline: { marginVertical: 12, paddingLeft: 4 },
  timelineRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  dot: { width: 12, height: 12, borderRadius: 6, marginRight: 12 },
  dotDone: { backgroundColor: '#16A34A' },
  dotCurrent: { backgroundColor: colors.primary },
  dotPending: { backgroundColor: '#9CA3AF' }
});
