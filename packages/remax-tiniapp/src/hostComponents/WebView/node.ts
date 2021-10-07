import { unique } from '@tiki.vn/remax-shared';

export const alias = { id: 'id', src: 'src', onMessage: 'onMessage' };

export const props = unique(Object.values(alias));
