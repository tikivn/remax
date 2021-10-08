import * as React from 'react';
import CustomComponent from 'custom-component';
import { createHostComponent } from '@tiki-miniapp/remax-macro';

const FooBar = createHostComponent('foo-bar', ['foo', ['class', 'className']]);

export default () => {
  return (
    <>
      <FooBar foo="bar" className="class" />
      <CustomComponent foo="bar" />
    </>
  );
};
