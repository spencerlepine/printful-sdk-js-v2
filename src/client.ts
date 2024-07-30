import { BASE_URL } from './constants';

export type FetchDataFunc = (url: string, config?: RequestInit) => Promise<any>;

export interface PrintfulConfig {
  accessToken: string;
}

class Printful {
  #accessToken: string;

  constructor(config: PrintfulConfig) {
    this.#accessToken = config.accessToken;

    // TODO - add methods
  }

  // Printful REST API (v2) Specification:
  // header: `Authorization: Bearer ${PRINTFUL_API_TOKEN}`
  // ContentType: application/json;charset=utf-8
  // baseUrl: https://api.printful.com/v2/
  private async fetchData(url: string, config: RequestInit = {}): Promise<any> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.#accessToken}`,
    };

    const requestData = {
      ...config,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    try {
      const response = await fetch(`${BASE_URL}${url}`, requestData);
      if (!response.ok) {
        throw new Error(`Printful SDK Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      // Rethrow the error for upstream code to handle
      throw error;
    }
  }
}

export default Printful;
