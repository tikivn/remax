import * as React from 'react';
import { View } from '@tiki-miniapp/remax/one';
import { usePageEvent } from '@tiki-miniapp/remax/macro';
import { GlobalContext } from '../../GlobalContext';

export default () => {
  const [value, setValue] = React.useState('');
  const { name } = React.useContext(GlobalContext);

  usePageEvent('onShow', () => {
    setValue('show');
  });

  return (
    <View>
      <View>{name}</View>
      <View>{value}</View>
    </View>
  );
};
