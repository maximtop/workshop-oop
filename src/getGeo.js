import Api from './Api';

export default async (ipAddress) => {
  const api = new Api();
  console.log(api);
  const result = await api.getGeo(ipAddress);
  console.log(result);
  const { error, data } = await api.getGeo(ipAddress);

  if (error) {
    return `Sorry some error happened: "${error}"`;
  }

  if (data.status !== 'success') {
    return `Sorry some error happened: "${data.message}"`;
  }

  return data;
};
