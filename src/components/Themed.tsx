import React from 'react';
import { View, Text, ViewProps, TextProps } from 'react-native';
import { colors } from '@theme/colors';

export const Screen = ({ style, ...props }: ViewProps) => (
  <View style={[{ flex: 1, backgroundColor: colors.background }, style]} {...props} />
);

export const Title = ({ style, ...props }: TextProps) => (
  <Text style={[{ color: colors.primary, fontSize: 24 }, style]} {...props} />
);

export const Body = ({ style, ...props }: TextProps) => (
  <Text style={[{ color: '#111827', fontSize: 16 }, style]} {...props} />
);
