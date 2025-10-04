import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function MyOrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>Active</Text>
        <Text style={styles.tab}>History</Text>
      </View>

      <Card>
        <View style={styles.row}>
          <View style={styles.progress} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>2 × 15L Water Cans</Text>
            <Text style={styles.sub}>#AQ12345 • Tomorrow, Morning 6-10 AM</Text>
            <Text style={styles.badge}>Confirmed</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button title="Track Order" variant="primary" style={{ flex: 1, marginRight: 8 }} />
          <Button title="Cancel" variant="outline" style={{ flex: 1, marginLeft: 8 }} />
        </View>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <View style={styles.row}>
          <View style={styles.progressDelivered} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>3 × 15L Water Cans</Text>
            <Text style={styles.sub}>Delivered Today • 8:30 AM</Text>
            <Text style={styles.badgeDelivered}>Delivered ✓</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button title="Reorder" variant="primary" style={{ flex: 1, marginRight: 8 }} />
          <Button title="Rate Order" variant="outline" style={{ flex: 1, marginLeft: 8 }} />
        </View>
      </Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  tabs: { flexDirection: 'row', marginBottom: 12 },
  tab: { marginRight: 16, paddingBottom: 6, color: '#6B7280' },
  tabActive: { color: colors.primary, borderBottomWidth: 2, borderBottomColor: colors.primary },
  row: { flexDirection: 'row', alignItems: 'center' },
  progress: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#DBEAFE', marginRight: 12 },
  progressDelivered: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#DCFCE7', marginRight: 12 },
  title: { fontWeight: '800', color: '#111827' },
  sub: { color: '#6B7280' },
  badge: { alignSelf: 'flex-start', backgroundColor: '#FEF3C7', color: '#92400E', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginTop: 6 },
  badgeDelivered: { alignSelf: 'flex-start', backgroundColor: '#DCFCE7', color: '#065F46', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginTop: 6 },
  actions: { flexDirection: 'row', marginTop: 12 }
});
