import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  publicId: 'public-id',
  onFollow: 'onFollow',
};

export const props = unique(Object.values(alias));
