import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function SubscriptionScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Save with Subscriptions</Text>
        <Text style={styles.heroSub}>Get 10% off on every delivery</Text>
      </View>

      <Card style={styles.activePlan}>
        <Text style={styles.crown}>👑 Your Active Plan</Text>
        <Text style={styles.planName}>Daily Delivery Plan</Text>
        <Text>2 cans every morning</Text>
        <Text>Next delivery: Tomorrow</Text>
        <Text>Auto-renews on: 15 Oct</Text>
        <View style={styles.progress}><View style={styles.progressFill} /></View>
        <Text>Day 5 of 30</Text>
        <Button title="Manage Plan" variant="outline" style={{ marginTop: 8 }} />
      </Card>

      {[
        { name: 'Daily Delivery', price: '₹54/can', popular: true },
        { name: 'Alternate Day Plan', price: '₹55/can' },
        { name: 'Weekly Delivery', price: '₹57/can' }
      ].map((p) => (
        <Card key={p.name} style={styles.planCard}>
          <Text style={styles.planTitle}>{p.name}</Text>
          {p.popular && <Text style={styles.popular}>Most Popular</Text>}
          <Text>Every day delivery • 10% discount • Free cancellations • Priority delivery</Text>
          <Text style={styles.planPrice}>{p.price} <Text style={styles.strike}>₹60</Text></Text>
          <Button title={p.popular ? 'Subscribe Now' : 'Choose Plan'} variant={p.popular ? 'coral' : 'outline'} style={{ marginTop: 8 }} />
        </Card>
      ))}

      <Text style={styles.link}>Compare all plans ></Text>

      <View style={styles.benefits}>
        {['Save 10–15%', 'No daily ordering hassle', 'Priority delivery'].map((b) => (
          <Card key={b} style={styles.benefitCard}><Text style={{ fontWeight: '700' }}>{b}</Text></Card>
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        {[ 'Choose your plan', 'Set delivery schedule', 'Automated deliveries', 'Cancel anytime' ].map((s, i) => (
          <View key={s} style={{ flexDirection: 'row', marginBottom: 6 }}>
            <Text style={{ fontWeight: '800', width: 24 }}>{i+1}.</Text>
            <Text>{s}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  hero: { alignItems: 'center', marginBottom: 12 },
  heroTitle: { fontSize: 20, fontWeight: '800' },
  heroSub: { color: '#6B7280' },
  activePlan: { backgroundColor: colors.primary },
  crown: { color: colors.white, fontWeight: '800' },
  planName: { color: colors.white, fontSize: 18, fontWeight: '800' },
  progress: { height: 8, backgroundColor: '#80BFFF', borderRadius: 4, marginVertical: 8 },
  progressFill: { width: '16%', height: '100%', backgroundColor: colors.white, borderRadius: 4 },
  planCard: { marginTop: 12, position: 'relative' },
  planTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  planPrice: { fontSize: 18, fontWeight: '800', marginTop: 4 },
  strike: { textDecorationLine: 'line-through', color: '#6B7280' },
  popular: { position: 'absolute', right: 12, top: 12, backgroundColor: '#FDE68A', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, fontWeight: '800' },
  link: { color: colors.primary, marginTop: 12, textAlign: 'center' },
  benefits: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  benefitCard: { width: '32%' }
});
