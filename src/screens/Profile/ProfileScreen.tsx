import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function ProfileScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.header}>          
          <View style={styles.avatar} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.name}>Rahul Sharma</Text>
            <Text style={styles.phone}>+91 98765 43210 ✓</Text>
            <Text style={styles.meta}>Member since Sept 2025 • Silver Member 🥈</Text>
          </View>
        </View>
      </Card>

      <View style={styles.statsRow}>
        {['Total Orders\n24', 'Money Saved\n₹340', 'Bottles Returned\n18/24'].map((s) => (
          <Card key={s} style={styles.stat}><Text style={{ textAlign: 'center' }}>{s}</Text></Card>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Account</Text>
      {['Personal Information', 'Manage Addresses', 'Payment Methods', 'Notifications'].map((i) => (
        <Card key={i} style={styles.listItem}><Text>{i}</Text></Card>
      ))}

      <Text style={styles.sectionTitle}>Preferences</Text>
      {['Language — English', 'Default Slot — Morning', 'Bottle Deposit Status — ₹200 deposit'].map((i) => (
        <Card key={i} style={styles.listItem}><Text>{i}</Text></Card>
      ))}

      <Text style={styles.sectionTitle}>Support & Info</Text>
      {['Help & Support', 'Referrals — Invite Friends (Earn ₹100)', 'About Us', 'Terms & Privacy', 'Rate Our App'].map((i) => (
        <Card key={i} style={styles.listItem}><Text>{i}</Text></Card>
      ))}

      <Card style={styles.rewards}><Text style={styles.rewardsText}>🏆 Loyalty Rewards — 450 points — View Rewards ></Text></Card>

      <Button title="Logout" variant="outline" style={{ marginTop: 12 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#E6F0FB' },
  name: { fontSize: 20, fontWeight: '800', color: '#111827' },
  phone: { color: '#111827' },
  meta: { color: '#6B7280' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  stat: { width: '32%', alignItems: 'center', justifyContent: 'center' },
  sectionTitle: { marginTop: 16, fontSize: 18, fontWeight: '800', color: '#111827' },
  listItem: { marginTop: 8 },
  rewards: { backgroundColor: colors.primary, marginTop: 8 },
  rewardsText: { color: colors.white, fontWeight: '700', textAlign: 'center' }
});
