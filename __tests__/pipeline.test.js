import { pipeline } from '../src';

test('pipeline', async () => {
  await pipeline();
  expect('').toEqual('');
});
