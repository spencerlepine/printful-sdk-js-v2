import Printful from '../src/client';

export const config = {
  accessToken: 'mockAccessToken',
};

const printful = new Printful(config);

export default printful;
