import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '@theme/index';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, selected ? styles.selected : styles.unselected]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: spacing.sm
  },
  selected: { backgroundColor: '#E6F0FB', borderColor: colors.primary },
  unselected: { backgroundColor: colors.white, borderColor: '#DCE6F5' },
  text: { color: '#1F2937', fontSize: 14, fontWeight: '600' },
  textSelected: { color: colors.primary }
});
