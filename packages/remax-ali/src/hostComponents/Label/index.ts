import * as React from 'react';
import { createHostComponent } from '@tiki.vn/remax-runtime';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
  className?: string;
}

export const Label = createHostComponent<LabelProps>('label') as React.ComponentType<LabelProps>;
