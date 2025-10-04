import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '@theme/colors';
import { Card } from '@components/Card';
import { Chip } from '@components/Chip';
import { Button } from '@components/Button';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greet}>Hello, Rahul 👋</Text>
          <Text style={styles.loc}>Home - Jubilee Hills, Hyderabad ▾</Text>
        </View>
        <View style={styles.rightIcons}>
          <View style={styles.bell}>
            <Text style={styles.badge}>3</Text>
          </View>
          <View style={styles.avatar} />
        </View>
      </View>

      <Card style={styles.wallet}>
        <Text style={styles.walletText}>Wallet Balance: ₹850</Text>
        <TouchableOpacity style={styles.addMoney}><Text style={styles.addMoneyText}>Add Money</Text></TouchableOpacity>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../../assets/splash.png')} style={styles.productImg} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.prodTitle}>15L Water Can</Text>
            <Text style={styles.prodPrice}>₹60 per can</Text>
            <View style={styles.qtyRow}>
              <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyBtnText}>-</Text></TouchableOpacity>
              <Text style={styles.qtyVal}>1</Text>
              <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyBtnText}>+</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Chip label="Morning 🌅" selected />
              <Chip label="Evening 🌙" />
            </View>
            <Text style={styles.date}>📅 Tomorrow, 5 Oct</Text>
          </View>
        </View>
        <Button title="Book Now" variant="coral" style={{ marginTop: 12 }} onPress={() => navigation.navigate('Booking')} />
      </Card>

      <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Upcoming Deliveries</Text></View>
      <Card>
        <View style={styles.deliveryRow}>
          <View style={styles.smallBottle} />
          <View style={{ flex: 1 }}>
            <Text style={styles.deliveryTitle}>2 Cans</Text>
            <Text style={styles.deliverySub}>Tomorrow, Morning</Text>
          </View>
          <Text style={styles.statusOnTrack}>On Track</Text>
        </View>
      </Card>
      <Card style={{ marginTop: 12 }}>
        <View style={styles.deliveryRow}>
          <View style={styles.smallBottle} />
          <View style={{ flex: 1 }}>
            <Text style={styles.deliveryTitle}>3 Cans</Text>
            <Text style={styles.deliverySub}>6 Oct, Evening</Text>
          </View>
          <Text style={styles.viewDetails}>View Details</Text>
        </View>
      </Card>

      <View style={styles.quickGrid}>
        {[
          { label: 'My Orders' },
          { label: 'Subscriptions' },
          { label: 'Bottle Return' },
          { label: 'Help & Support' }
        ].map((it) => (
          <Card key={it.label} style={styles.quickCard}>
            <View style={styles.quickIcon} />
            <Text style={styles.quickLabel}>{it.label}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greet: { fontSize: 22, fontWeight: '800', color: '#111827' },
  loc: { marginTop: 4, color: '#6B7280' },
  rightIcons: { flexDirection: 'row', alignItems: 'center' },
  bell: { width: 36, height: 36, borderRadius: 12, backgroundColor: '#E6F0FB', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  badge: { color: colors.coral, fontWeight: '800' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E5F0FF' },
  wallet: { marginTop: 16, backgroundColor: colors.primary },
  walletText: { color: colors.white, fontWeight: '700' },
  addMoney: { position: 'absolute', right: 16, top: 12, borderWidth: 1, borderColor: colors.white, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6 },
  addMoneyText: { color: colors.white },
  productImg: { width: 96, height: 120, borderRadius: 16, backgroundColor: '#E6F4FF' },
  prodTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  prodPrice: { color: '#111827', marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  qtyBtn: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center' },
  qtyBtnText: { color: colors.primary, fontSize: 18, fontWeight: '800' },
  qtyVal: { marginHorizontal: 10, fontWeight: '700' },
  date: { marginTop: 6, color: '#374151' },
  sectionHeader: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  deliveryRow: { flexDirection: 'row', alignItems: 'center' },
  smallBottle: { width: 28, height: 36, borderRadius: 8, backgroundColor: '#E6F4FF', marginRight: 10 },
  deliveryTitle: { fontWeight: '700', color: '#111827' },
  deliverySub: { color: '#6B7280' },
  statusOnTrack: { color: '#22C55E', fontWeight: '700' },
  viewDetails: { color: colors.primary, fontWeight: '700' },
  quickGrid: { marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  quickCard: { width: '48%', marginBottom: 12, alignItems: 'center' },
  quickIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#E6F0FB', marginBottom: 8 },
  quickLabel: { fontWeight: '700', color: '#111827' }
});
