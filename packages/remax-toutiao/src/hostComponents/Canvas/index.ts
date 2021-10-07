import * as React from 'react';
import { createHostComponent } from '@tiki.vn/remax-runtime';

import { BaseProps } from '../../types/component';

export interface CanvasProps extends BaseProps {
  canvasId: string;
}

export const Canvas: React.ComponentType<CanvasProps> = createHostComponent<CanvasProps>('canvas');
