import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  className: 'class',
  style: 'style',
  id: 'id',
  name: 'name',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled',
  onChange: 'onChange',
  color: 'color',
};

export const props = unique(Object.values(alias));
