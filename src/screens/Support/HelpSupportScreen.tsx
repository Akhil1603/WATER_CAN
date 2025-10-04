import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { colors } from '@theme/colors';

export default function HelpSupportScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        {['Live Chat', 'Call Us', 'WhatsApp'].map((t) => (
          <Card key={t} style={{ flex: 1, marginRight: 8 }}><Text>{t}</Text></Card>
        ))}
      </View>

      <Text style={styles.sectionTitle}>How can we help?</Text>
      <Card><Text>Search for help…</Text></Card>

      <View style={styles.grid}>
        {['Order Issues', 'Payment Problems', 'Delivery Delays', 'Quality Concerns', 'Account Settings', 'Bottle Returns'].map((i) => (
          <Card key={i} style={styles.gridItem}><Text>{i}</Text></Card>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <Card>
        <Text style={{ fontWeight: '800' }}>How do I cancel my order?</Text>
        <Text>Open My Orders → Select order → Cancel.</Text>
        <Text style={{ marginTop: 8 }}>Was this helpful? 👍 👎</Text>
      </Card>

      <Card style={{ marginTop: 8 }}>
        <Text>What is the delivery area?</Text>
        <Text>How do I get refund?</Text>
        <Text>Can I change delivery slot?</Text>
        <Text>What about water quality?</Text>
      </Card>

      <Text style={styles.sectionTitle}>Your Recent Tickets</Text>
      <Card>
        <Text>#SUP12345 • Payment not reflected • Resolved • 2 Oct</Text>
        <Text style={styles.link}>View Details ></Text>
      </Card>

      <Card style={{ marginTop: 8 }}>
        <Text>Can’t find answer?</Text>
        <Button title="Raise a Support Ticket" style={{ marginTop: 8 }} />
      </Card>

      <Card style={{ marginTop: 8 }}>
        <Text>support@aquaswift.com • +91 1800 xxx xxxx • 24/7 support</Text>
      </Card>

      <Text style={styles.link}>Rate your support experience ⭐⭐⭐⭐⭐</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  row: { flexDirection: 'row', marginBottom: 12 },
  sectionTitle: { marginTop: 12, fontSize: 18, fontWeight: '800', color: '#111827' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '48%', marginTop: 8 },
  link: { color: colors.primary, marginTop: 8 }
});
