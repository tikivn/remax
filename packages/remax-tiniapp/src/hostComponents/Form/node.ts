import { unique } from '@tiki.vn/remax-shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  reportSubmit: 'report-submit',
  onSubmit: 'onSubmit',
  onReset: 'onReset',
};

export const props = unique(Object.values(alias));
