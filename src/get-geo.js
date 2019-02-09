import Api from './Api';

export default async (ipAddress = '', api = new Api()) => {
  let response;
  try {
    response = await api.getGeo(ipAddress);
  } catch (e) {
    response = `Sorry some error happened: "${e.message}"`;
  }

  return response;
};
