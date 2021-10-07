import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  type: 'type',
  size: 'size',
  color: 'color',
};

export const props = unique(Object.values(alias));
