import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '@theme/colors';
import { Button } from '@components/Button';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: 'slide1',
    title: 'Pure Water, Delivered Fresh',
    subtitle: 'Premium quality 15L water cans delivered to your doorstep',
    bg: ['#ffffff', '#EAF6FF']
  },
  {
    key: 'slide2',
    title: 'Choose Your Delivery Slot',
    subtitle: 'Morning (6-10 AM) or Evening (4-8 PM) - You decide!',
    bg: ['#E6FFF8', '#ffffff']
  },
  {
    key: 'slide3',
    title: 'Safe & Secure Payments',
    subtitle: 'Add money to wallet and enjoy seamless ordering',
    bg: ['#EAF2FF', '#E6FFF8']
  }
];

export default function OnboardingSlides({ navigation }: any) {
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      navigation.replace('Auth');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={() => navigation.replace('Auth')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(i) => i.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const i = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(i);
        }}
        renderItem={({ item, index: i }) => (
          <View style={[styles.slide, { width }]}>            
            <View style={styles.illustration}>
              <Image source={require('../../../assets/splash.png')} style={{ width: width * 0.6, height: height * 0.3, borderRadius: 24, backgroundColor: '#E6F0FA' }} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <View style={styles.dotsRow}>
              {slides.map((s, di) => (
                <View key={s.key} style={[styles.dot, di === index ? styles.dotActive : undefined]} />
              ))}
            </View>
            <Button title={i === slides.length - 1 ? 'Get Started' : 'Next'} onPress={onNext} variant={i === slides.length - 1 ? 'coral' : 'primary'} style={{ width: '100%', marginTop: 16 }} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingHorizontal: 20, paddingTop: 24 },
  skip: { position: 'absolute', right: 20, top: 24, zIndex: 10 },
  skipText: { color: '#6B7280', fontSize: 14 },
  slide: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  illustration: { width: '100%', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 28, color: colors.primary, textAlign: 'center', fontWeight: '800' },
  subtitle: { fontSize: 16, color: '#6B7280', textAlign: 'center', marginTop: 8 },
  dotsRow: { flexDirection: 'row', marginTop: 16 },
  dot: { width: 8, height: 8, borderRadius: 8, backgroundColor: '#D1D5DB', marginHorizontal: 4 },
  dotActive: { backgroundColor: colors.primary }
});
