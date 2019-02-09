import Api from './Api';

export default async (ipAddress) => {
  const api = new Api();
  const { error, data } = await api.getGeo(ipAddress);

  if (error) {
    return `Sorry some error happened: "${error}"`;
  }

  if (data.status !== 'success') {
    return `Sorry some error happened: "${data.message}"`;
  }

  return data;
};
