// TODO https://jestjs.io/docs/en/mock-functions#mocking-modules
const geoData = {
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

class Api {
  getGeo(ip = '111.111.111.111') {
    return new Promise((resolve, reject) => {
      process.nextTick(() => {
        if (geoData[ip]) {
          resolve({
            status: 'success', ...geoData[ip],
          });
        } else {
          reject({
            status: 'fail',
            message: 'invalid query',
            query: ip,
          });
        }
      });
    });
  }
}

export default Api;
