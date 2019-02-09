import Api from './Api';

class Geo {
  constructor(api = new Api()) {
    this.api = api;
  }
  async getGeo(ipAddress = '') {
    return this.api.getGeo(ipAddress);
  }
}

export default Geo;
