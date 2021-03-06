import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: '@tiki-miniapp/remax-macro',
  plugin,
  fixtures: join(__dirname, 'fixtures'),
  snapshot: true,
  endOfLine: 'preserve',
});
