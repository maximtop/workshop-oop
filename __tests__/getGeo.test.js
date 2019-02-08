import getGeo from '../src';

jest.mock('../src/Api');

test('getGeo', async () => {
  const data = await getGeo();
  expect(data).toEqual('success');
});
