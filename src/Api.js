import axios from 'axios';

class Api {
  constructor() {
    this.serviceUrl = 'http://ip-api.com/json';
  }

  async getGeo(ipAddress = '') {
    const requestUrl = `${this.serviceUrl}/${ipAddress}`;
    let result;
    try {
      const { data } = await axios.get(requestUrl, {
        validateStatus: status => {
          return status === 200;
        }
      });
      result = { error: null, data };
    } catch (e) {
      result = { error: e.message };
    }
    return result;
  }
}

export default Api;
