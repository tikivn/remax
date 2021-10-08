import * as React from 'react';
import { createHostComponent } from '@tiki-miniapp/remax-runtime';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

export const Lifestyle = createHostComponent<LifestyleProps>('lifestyle') as React.ComponentType<LifestyleProps>;
