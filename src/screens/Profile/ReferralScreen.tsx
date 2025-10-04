import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function ReferralScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Invite & Earn</Text>
        <Text style={styles.heroSub}>Get ₹100 for every friend</Text>
      </View>

      <Card style={styles.codeCard}>
        <Text style={{ color: '#6B7280' }}>Your Referral Code</Text>
        <Text style={styles.code}>RAHUL2025</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button title="Copy" variant="outline" style={{ flex: 1, marginRight: 8 }} />
          <Button title="Share" variant="primary" style={{ flex: 1, marginLeft: 8 }} />
        </View>
      </Card>

      <Card>
        <View style={styles.statsRow}>
          <View style={styles.stat}><Text>Friends Invited</Text><Text style={styles.statVal}>8</Text></View>
          <View style={styles.stat}><Text>Rewards Earned</Text><Text style={styles.statVal}>₹600</Text></View>
          <View style={styles.stat}><Text>Pending</Text><Text style={styles.statVal}>2</Text></View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>How It Works</Text>
      {[ 'Share your code', 'Friend signs up', 'Both get rewarded' ].map((s, i) => (
        <Card key={s} style={{ marginTop: 8 }}><Text style={{ fontWeight: '800' }}>{i+1}. {s}</Text></Card>
      ))}

      <Text style={styles.sectionTitle}>Your Referrals</Text>
      {[
        'Priya Sharma — Joined on 1 Oct — Completed ✓ +₹100',
        'Amit Kumar — Joined on 30 Sep — Pending first order',
        'Sneha Reddy — Joined on 28 Sep — Completed ✓ +₹100'
      ].map((r) => (
        <Card key={r} style={{ marginTop: 8 }}><Text>{r}</Text></Card>
      ))}

      <Card style={{ marginTop: 12 }}>
        <Text>Referral Champions 🏆 — Top referrers this month</Text>
        <Text>1. User A — 25</Text>
        <Text>2. User B — 18</Text>
        <Text>3. User C — 15</Text>
        <Text>Your rank: #12 — Keep going!</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  hero: { backgroundColor: '#4F46E5', borderRadius: 16, padding: 16, alignItems: 'center' },
  heroTitle: { color: 'white', fontSize: 20, fontWeight: '800' },
  heroSub: { color: 'white' },
  codeCard: { marginTop: 12 },
  code: { fontSize: 32, fontWeight: '800', color: '#111827', marginVertical: 8 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  stat: { alignItems: 'center', flex: 1 },
  statVal: { fontSize: 18, fontWeight: '800', color: '#111827' },
  sectionTitle: { marginTop: 16, fontSize: 18, fontWeight: '800', color: '#111827' }
});
