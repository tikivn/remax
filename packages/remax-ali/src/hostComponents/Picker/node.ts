import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  id: 'id',
  name: 'name',
  className: 'class',
  style: 'style',
  range: 'range',
  rangeKey: 'range-key',
  value: 'value',
  onChange: 'onChange',
  disabled: 'disabled',
};

export const props = unique(Object.values(alias));
