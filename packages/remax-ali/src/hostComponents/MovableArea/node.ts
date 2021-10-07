import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  width: 'width',
  height: 'height',
};

export const props = unique(Object.values(alias));
