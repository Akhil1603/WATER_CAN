import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function BottleTrackingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.summary}>
        <Text style={{ color: colors.white }}>Bottles with You</Text>
        <Text style={styles.count}>6</Text>
        <Text style={{ color: colors.white }}>Please return 2 empty bottles</Text>
        <View style={styles.progress}><View style={styles.fill} /></View>
      </Card>

      <Card>
        <Text style={{ color: '#065F46' }}>Deposit Paid</Text>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>₹600</Text>
        <Text style={{ color: colors.primary }}>View Details ></Text>
        <Text style={{ color: '#6B7280' }}>Refundable when bottles returned</Text>
      </Card>

      <View style={styles.row}>
        <Card style={styles.bottleCard}><Text>Full Bottles: 4</Text><Text>Ready to use</Text></Card>
        <Card style={styles.bottleCard}><Text>Empty Bottles: 2</Text><Button title="Schedule Pickup" variant="coral" style={{ marginTop: 8 }} /></Card>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      {['2 bottles delivered — 2 Oct, Morning', '1 bottle returned — 28 Sep, Evening', '3 bottles delivered — 25 Sep, Morning'].map((h) => (
        <Card key={h} style={{ marginTop: 8 }}><Text>{h}</Text></Card>
      ))}

      <Card style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: '800' }}>Schedule Empty Bottle Pickup</Text>
        <Text>We’ll collect empty bottles in your next delivery</Text>
        <Text style={styles.link}>Or schedule separate pickup</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: '800' }}>How Refunds Work</Text>
        <Text>1. Return bottles during delivery</Text>
        <Text>2. Delivery person verifies count</Text>
        <Text>3. Deposit refunded to wallet instantly</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text>Scan bottle QR for tracking</Text>
        <Button title="Open Scanner" style={{ marginTop: 8 }} />
      </Card>

      <Card style={{ marginTop: 12 }}>
        <Text>Need more bottles?</Text>
        <Button title="Add to next order" variant="primary" style={{ marginTop: 8 }} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  summary: { backgroundColor: colors.primary, alignItems: 'center' },
  count: { color: colors.white, fontSize: 48, fontWeight: '800' },
  progress: { height: 8, backgroundColor: '#80BFFF', borderRadius: 4, width: '100%', marginTop: 8 },
  fill: { width: '66%', height: 8, backgroundColor: colors.white, borderRadius: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  bottleCard: { width: '48%' },
  sectionTitle: { marginTop: 16, fontSize: 18, fontWeight: '800', color: '#111827' },
  link: { color: colors.primary, marginTop: 6 }
});
