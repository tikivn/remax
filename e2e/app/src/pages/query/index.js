import * as React from 'react';
import { useQuery } from '@tiki-miniapp/remax';
import { View } from '@tiki-miniapp/remax/one';

export default props => {
  const query = useQuery();

  return (
    <View>
      <View>query from props: {props.location.query.name}</View>
      <View>query from hook: {query.name}</View>
    </View>
  );
};
