import * as React from 'react';
import { usePageInstance, createPortal } from '@tiki-miniapp/remax-runtime';

export default function Modal({ children }: React.PropsWithChildren<Record<string, any>>) {
  const inst = usePageInstance();

  return createPortal(children, inst.modalContainer);
}
