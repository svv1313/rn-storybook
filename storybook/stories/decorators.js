import React from 'react';
import { View } from 'react-native';

export const BufferView = (storyFn) => (
  <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
    {storyFn()}
  </View>
)
