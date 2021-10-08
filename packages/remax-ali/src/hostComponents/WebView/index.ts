import * as React from 'react';
import { createHostComponent } from '@tiki-miniapp/remax-runtime';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}

export const WebView = createHostComponent<WebViewProps>('web-view') as React.ComponentType<WebViewProps>;
