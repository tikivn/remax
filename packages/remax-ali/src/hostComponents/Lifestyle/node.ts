import { unique } from '@tiki-miniapp/remax-shared';

export const alias = {
  publicId: 'public-id',
  onFollow: 'onFollow',
};

export const props = unique(Object.values(alias));
