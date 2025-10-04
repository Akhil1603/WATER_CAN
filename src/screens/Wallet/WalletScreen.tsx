import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function WalletScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.hero}>
        <Text style={styles.heroLabel}>Available Balance</Text>
        <Text style={styles.heroAmount}>₹850.00</Text>
        <Text style={styles.updated}>Last updated: Just now</Text>
        <Button title="Add Money" variant="outline" style={{ marginTop: 8 }} />
      </Card>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
        {['₹500', '₹1000', '₹2000', '₹5000', 'Custom'].map((a) => (
          <View key={a} style={styles.chip}><Text style={styles.chipText}>{a}</Text></View>
        ))}
      </ScrollView>

      <View style={styles.section}><Text style={styles.sectionTitle}>Add Money Via</Text></View>
      <View style={styles.methodsRow}>
        {['UPI', 'Cards', 'Net Banking', 'Other Methods'].map((m) => (
          <Card key={m} style={styles.methodCard}><Text style={{ fontWeight: '700' }}>{m}</Text></Card>
        ))}
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <Text style={styles.link}>View All ></Text>
      </View>

      {[{t:'Money Added via UPI', d:'2 Oct, 4:30 PM', a:'+₹1000', c:'#16A34A'}, {t:'Order Payment #AQ12345', d:'1 Oct, 8:15 AM', a:'-₹120', c:'#EF4444'}].map((tx) => (
        <Card key={tx.t} style={styles.txCard}>
          <Text style={{ fontWeight: '700' }}>{tx.t}</Text>
          <View style={styles.rowBetween}>
            <Text style={{ color: '#6B7280' }}>{tx.d}</Text>
            <Text style={{ color: tx.c as any }}>{tx.a}</Text>
          </View>
        </Card>
      ))}

      <Card style={styles.offer}><Text style={styles.offerText}>Get ₹50 cashback on adding ₹1000+</Text></Card>

      <Button title="Download Statement" variant="outline" style={{ marginTop: 12 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  hero: { backgroundColor: colors.primary },
  heroLabel: { color: colors.white },
  heroAmount: { color: colors.white, fontSize: 36, fontWeight: '800' },
  updated: { color: colors.white },
  chip: { backgroundColor: colors.white, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 8 },
  chipText: { color: colors.primary, fontWeight: '700' },
  section: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  methodsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 8 },
  methodCard: { width: '48%', marginBottom: 12 },
  sectionRow: { marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  link: { color: colors.primary },
  txCard: { marginTop: 8 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  offer: { backgroundColor: '#EEF2FF', alignItems: 'center' },
  offerText: { color: colors.primary, fontWeight: '700' }
});
