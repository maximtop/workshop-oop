import Api from './Api';

class Geo {
  async getGeo(ipAddress = '', api = new Api()) {
    return api.getGeo(ipAddress);
  }
}

export default Geo;
