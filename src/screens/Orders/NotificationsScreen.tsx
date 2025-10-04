import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { colors } from '@theme/colors';

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabs}>
        {['All', 'Orders', 'Offers', 'Updates'].map((t, i) => (
          <Text key={t} style={[styles.tab, i === 0 && styles.tabActive]}>{t}</Text>
        ))}
      </View>

      <Text style={styles.dateHeader}>Today</Text>
      <Card style={styles.unread}><Text style={{ fontWeight: '800' }}>Order Out for Delivery</Text><Text>Your order #AQ12345 is on the way • 2 mins ago</Text></Card>
      <Card><Text style={{ fontWeight: '800' }}>Special Offer! 🎉</Text><Text>Get 20% off on your next subscription • 1 hour ago</Text></Card>

      <Text style={styles.dateHeader}>Yesterday</Text>
      <Card><Text style={{ fontWeight: '800' }}>Order Delivered Successfully</Text><Text>#AQ12344 delivered at 8:30 AM • Yesterday, 8:35 AM</Text></Card>
      <Card><Text style={{ fontWeight: '800' }}>Payment Successful</Text><Text>₹120 deducted from wallet for order #AQ12344 • Yesterday, 8:00 AM</Text></Card>

      <Text style={styles.dateHeader}>Earlier</Text>
      <Card><Text style={{ fontWeight: '800' }}>Profile Updated</Text><Text>Your address has been updated successfully • 28 Sep, 3:00 PM</Text></Card>
      <Card><Text style={{ fontWeight: '800' }}>You're now a Silver Member!</Text><Text>Congratulations! Enjoy exclusive benefits • 25 Sep</Text></Card>

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <View style={styles.outlineBtn}><Text>Clear All</Text></View>
        <Text style={[styles.link, { marginLeft: 12 }]}>Notification Settings</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  tabs: { flexDirection: 'row', marginBottom: 12 },
  tab: { marginRight: 16, paddingBottom: 6, color: '#6B7280' },
  tabActive: { color: colors.primary, borderBottomWidth: 2, borderBottomColor: colors.primary },
  dateHeader: { marginTop: 12, color: '#6B7280' },
  unread: { backgroundColor: '#EFF6FF' },
  outlineBtn: { borderWidth: 1, borderColor: '#D1D5DB', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12 },
  link: { color: colors.primary }
});
