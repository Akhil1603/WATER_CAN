import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import { colors, spacing } from '@theme/index';

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'coral';
  style?: ViewStyle | ViewStyle[];
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', style }) => {
  const styles = StyleSheet.create({
    root: {
      borderRadius: 16,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center'
    },
    primary: { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    coral: { backgroundColor: colors.coral },
    outline: { borderWidth: 1, borderColor: colors.primary, backgroundColor: 'transparent' },
    text: { color: colors.white, fontSize: 16, fontWeight: '700' },
    textOutline: { color: colors.primary, fontSize: 16, fontWeight: '700' }
  });

  const variantStyle =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
      ? styles.secondary
      : variant === 'coral'
      ? styles.coral
      : styles.outline;

  const textStyle = variant === 'outline' ? styles.textOutline : styles.text;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, variantStyle, style] as any}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
