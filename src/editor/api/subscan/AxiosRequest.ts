import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { docCookies } from 'utils/cookies';

export const PLATFORM_AUTH_KEY = 'sub_token';

export function getLocalToken() {
  const token = docCookies.getItem(typeof document !== 'undefined' ? document.cookie : '', PLATFORM_AUTH_KEY);
  return token;
}

export function removeLocalToken() {
  docCookies.removeItem(document.cookie, PLATFORM_AUTH_KEY, '/', 'subscan.io');
}

type Result<T> = {
  code: number;
  message: string;
  data: T;
};

export class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = { timeout: 30000 };

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = getLocalToken() as string;
        const organizationId = localStorage.getItem('organization:id') as string;

        if (token) {
          config.headers!.Authorization = `Bearer ${token}`;
        }

        if (organizationId) {
          config.headers!['OPEN-PLATFORM-ORGANIZATION'] = organizationId;
        }

        return config;
      },
      (err: any) => {
        // error alert
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      (err: any) => {
        let message = '';
        switch (err.response.status) {
          case 401:
            message = 'request auth error (401)';
            removeLocalToken();
            break;
          default:
            message = `request error (${err.response.status})!`;
        }
        console.log('axios error:', message);
        /// global error alert
        return Promise.reject(err.response);
      }
    );
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config);
  }
}

export default new Request({});
