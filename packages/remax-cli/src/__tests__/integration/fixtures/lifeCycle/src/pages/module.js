import * as React from 'react';
import { usePageEvent } from '@tiki-miniapp/remax-macro';
import { View } from 'remax';

export default function () {
  usePageEvent('onShareAppMessage', () => {
    console.log('onShareAppMessage');
  });

  return <View>module</View>;
}
