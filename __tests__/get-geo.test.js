import axios from 'axios';
import getGeo from '../src';

jest.mock('axios');

test('getGeo should fetch data', async () => {
  const geoData = {
    as: 'AS2516 KDDI CORPORATION',
    city: 'Chiyoda',
    country: 'Japan',
    countryCode: 'JP',
    isp: 'KDDI',
    lat: 35.6906,
    lon: 139.77,
    org: 'Kddi Corporation',
    query: '111.111.111.111',
    region: '13',
    regionName: 'Tokyo',
    status: 'success',
    timezone: 'Asia/Tokyo',
    zip: '100-0001',
  };
  const response = { data: geoData };
  axios.get.mockImplementation(() => Promise.resolve(response));

  const data = await getGeo();
  expect(data).toEqual(geoData);
});


test('getGeo should handle failed status', async () => {
  const geoData = {
    query: '111.111.111.111',
    status: 'fail',
    message: 'invalid query',
  };
  const response = { data: geoData };
  axios.get.mockImplementation(() => Promise.resolve(response));

  const data = await getGeo();
  expect(data).toEqual(`Sorry some error happened: "${geoData.message}"`);
});


test('getGeo should handle rejected requests', async () => {
  const error = new Error('error message');
  axios.get.mockImplementation(() => Promise.reject(error));

  const data = await getGeo();
  expect(data).toEqual(`Sorry some error happened: "${error.message}"`);
});
