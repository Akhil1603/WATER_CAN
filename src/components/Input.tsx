import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '@theme/colors';

export const Input: React.FC<TextInputProps> = ({ style, ...props }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholderTextColor="#9CA3AF"
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#CCE0F5',
    borderRadius: 16,
    backgroundColor: colors.white
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827'
  }
});
