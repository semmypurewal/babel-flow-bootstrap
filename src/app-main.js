// @flow
import type {App} from './App';

import {createApp} from './App';

async function main() {
  const app1 = await createApp('app1');
  app1.run();
  const app2 = await createApp('app2');
  app2.run();
  const app3 = await createApp('app3');
  app3.run();
}

main();
