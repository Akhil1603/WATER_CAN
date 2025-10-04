import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { Chip } from '@components/Chip';
import { colors } from '@theme/colors';

export default function BookingScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.top}>
        <Text style={styles.topTitle}>New Order</Text>
        <Text style={styles.step}>Step 1 of 4</Text>
      </View>

      <Card>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.bold}>Deliver to: Home</Text>
            <Text style={styles.muted}>8-2-682, Jubilee Hills, Hyderabad</Text>
          </View>
          <Text style={{ color: colors.primary, fontWeight: '700' }}>Change</Text>
        </View>
        <Text style={styles.badge}>Within 5km radius</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text style={styles.bold}>15L Purified Water</Text>
        <Text style={styles.muted}>BIS Certified ✓</Text>
        <Text style={styles.price}>₹60/can</Text>
        <View style={{ flexDirection: 'row', marginTop: 6 }}>
          <Text style={styles.badgeBlue}>TDS: 50ppm</Text>
          <Text style={styles.badgeBlue}>pH: 7.2</Text>
        </View>
        <View style={styles.qtyRow}>
          <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyBtnText}>-</Text></TouchableOpacity>
          <Text style={styles.qtyVal}>2</Text>
          <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyBtnText}>+</Text></TouchableOpacity>
        </View>
      </Card>

      <View style={styles.section}><Text style={styles.sectionTitle}>Choose Date</Text></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16, paddingHorizontal: 16 }}>
        {['Today', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct'].map((d, i) => (
          <Card key={d} style={[styles.dateCard, i === 0 && styles.today]}>
            <Text style={{ fontWeight: '700' }}>{d}</Text>
            {i === 0 && <Text style={styles.todaySub}>Same day delivery +₹30</Text>}
          </Card>
        ))}
      </ScrollView>

      <View style={styles.section}><Text style={styles.sectionTitle}>Time Slot</Text></View>
      <View style={styles.rowBetween}>
        <Card style={[styles.slotCard, { flex: 1, marginRight: 8, borderColor: colors.primary, borderWidth: 1 }] }>
          <Text style={styles.bold}>Morning Slot</Text>
          <Text style={styles.muted}>6:00 AM - 10:00 AM</Text>
          <Text style={styles.available}>Available</Text>
        </Card>
        <Card style={[styles.slotCard, { flex: 1, marginLeft: 8 }]}>
          <Text style={styles.bold}>Evening Slot</Text>
          <Text style={styles.muted}>4:00 PM - 8:00 PM</Text>
          <Text style={styles.available}>Available</Text>
        </Card>
      </View>

      <Card style={styles.summaryCard}>
        <Text style={{ fontWeight: '700' }}>2 cans × ₹60 = ₹120</Text>
        <Text style={{ color: '#16A34A' }}>Wallet Balance: ₹850 ✓</Text>
        <Button title="Proceed to Confirm" variant="coral" onPress={() => navigation.navigate('Confirm')} style={{ marginTop: 8 }} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  topTitle: { fontSize: 20, fontWeight: '800' },
  step: { color: colors.primary, fontWeight: '700' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  bold: { fontWeight: '800', color: '#111827' },
  muted: { color: '#6B7280' },
  badge: { marginTop: 8, alignSelf: 'flex-start', backgroundColor: '#ECFDF5', color: '#065F46', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, fontWeight: '700' },
  badgeBlue: { backgroundColor: '#EFF6FF', color: colors.primary, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, marginRight: 6 },
  price: { marginTop: 8, fontSize: 18, fontWeight: '800' },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyBtn: { width: 36, height: 36, borderRadius: 12, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center' },
  qtyBtnText: { color: colors.primary, fontSize: 18, fontWeight: '800' },
  qtyVal: { marginHorizontal: 12, fontWeight: '700' },
  section: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  dateCard: { marginRight: 8, alignItems: 'center' },
  today: { borderWidth: 1, borderColor: colors.coral },
  todaySub: { color: colors.coral, marginTop: 4 },
  slotCard: { borderRadius: 16 },
  available: { marginTop: 6, color: '#16A34A', fontWeight: '700' },
  summaryCard: { position: 'relative', marginTop: 16 }
});
