import axios from 'axios';

class Api {
  constructor() {
    this.serviceUrl = 'http://ip-api.com/json';
  }

  async getGeo(ipAddress = '') {
    const requestUrl = `${this.serviceUrl}/${ipAddress}`;
    const { data } = await axios.get(requestUrl, {
      validateStatus: status => status === 200,
    });
    return data;
  }
}

export default Api;
