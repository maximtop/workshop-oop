import { Pipeline } from '../src';

test('oop Pipeline', async () => {
  const pipeline = new Pipeline();
  await pipeline.run();
  expect('').toEqual('');
});
