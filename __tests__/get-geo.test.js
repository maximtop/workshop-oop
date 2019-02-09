import Geo from '../src';

test('getGeo should handle rejected requests', async () => {
  const error = new Error('error message');

  class TestApi {
    getGeo() {
      return new Promise(() => {
        throw error;
      });
    }
  }

  const geo = new Geo(new TestApi());
  await expect(geo.getGeo('')).rejects.toEqual(error);
});

test('getGeo should handle provided ip address correctly', async () => {
  const geoData = {
    local: {
      as: 'AS35598 INETCOM LLC',
      city: 'Moscow',
      country: 'Russia',
      countryCode: 'RU',
      isp: 'Inetcom LLC',
      lat: 55.7522,
      lon: 37.6156,
      org: 'Inetcom LLC',
      query: '176.99.227.209',
      region: 'MOW',
      regionName: 'Moscow',
      status: 'success',
      timezone: 'Europe/Moscow',
      zip: '102292',
    },
    '111.111.111.111': {
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
    },
    '222.222.222.222': {
      as: 'AS4134 No.31,Jin-rong Street',
      city: 'Shijiazhuang',
      country: 'China',
      countryCode: 'CN',
      isp: 'Chinanet',
      lat: 38.0371,
      lon: 114.469,
      org: 'Chinanet HE',
      query: '222.222.222.222',
      region: 'HE',
      regionName: 'Hebei',
      status: 'success',
      timezone: 'Asia/Shanghai',
      zip: '',
    },
  };

  class TestApi {
    getGeo(ip) {
      let requestedIp;
      if (ip === '') {
        requestedIp = 'local';
      } else {
        requestedIp = ip;
      }
      return new Promise((resolve) => {
        resolve(geoData[requestedIp]);
      });
    }
  }

  const geo = new Geo(new TestApi());
  const localData = await geo.getGeo('');
  expect(localData).toEqual(geoData.local);

  const japanIp = '111.111.111.111';
  const japanData = await geo.getGeo(japanIp);
  expect(japanData).toEqual(geoData[japanIp]);

  const chinaIp = '222.222.222.222';
  const chinaData = await geo.getGeo(chinaIp);
  expect(chinaData).toEqual(geoData[chinaIp]);
});
