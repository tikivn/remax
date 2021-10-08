import * as React from 'react';
import { View, Text, navigateTo } from '@tiki-miniapp/remax/one';

export default () => {
  return (
    <View id="btn" onTap={() => navigateTo({ url: '/pages/navigate/two/index' })}>
      page one
    </View>
  );
};
