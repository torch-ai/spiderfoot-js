import axios, { AxiosInstance } from "axios";
import { IServiceOptions, SpiderfootConfigError } from "./Service.types";
import {Scans} from "./components/scans/Scans";

export default class Service {
  public static DEFAULT_TIMEOUT = 2000;

  protected client: AxiosInstance;
  protected options: IServiceOptions = {
    instanceUrl: "",
  };

  public scans: Scans;

  constructor(options: Partial<IServiceOptions>) {
    this.setOptions(options);
  }

  protected setEnvironment() {
    if (!this.options.instanceUrl) {
      throw new SpiderfootConfigError(`options.instanceUrl is undefined`);
    }

    this.client = axios.create({
      baseURL: this.options.instanceUrl,
      timeout: Service.DEFAULT_TIMEOUT,
    });

    // Bind to incoming requests
    // this.client.interceptors.request.use(this.onRequest.bind(this));
    // Bind to responses
    // this.client.interceptors.response.use(
    //   this.onResponseSuccess.bind(this),
    //   this.onResponseError.bind(this)
    // );

    this.scans = new Scans(this.client);
    return this;
  }

  setOptions(options: Partial<IServiceOptions>) {
    this.options = { ...this.options, ...options };
    this.setEnvironment();
    return this;
  }

  /**
   * Modifies the original request adding authorization if required.
   */
  // protected onRequest(
  //   originalRequest: AxiosRequestConfig
  // ): Promise<AxiosRequestConfig> {
  //   // Return a promise as some requests may need to try auth
  //   return new Promise((resolve, reject) => {
  //     const { apiKey } = this.options;
  //     originalRequest.params = originalRequest.params || {};
  //     originalRequest.params.api_key = apiKey;
  //     resolve(originalRequest);
  //   });
  // }

  /**
   * Provides success response handling
   */
  // protected onResponseSuccess(
  //   response: AxiosResponse
  // ): Promise<AxiosResponse<IMeta<any>>> {
  //   // Return a promise as some requests may need to retry auth
  //   return new Promise((resolve, reject) => {
  //     if (response.data.meta?.error_code) {
  //       return reject(this.getSpiderfootError(response.data.meta));
  //     }
  //
  //     resolve(response);
  //   });
  // }

  /**
   * Provides failure response handling
   */
  // protected onResponseError(error: AxiosError<IMeta<any>>) {
  //   // Return a promise as some requests may need to retry auth
  //   return new Promise((resolve, reject) => {
  //     if (error.response && error.response.status === 401) {
  //       this.options.onInvalidCredentials();
  //     }
  //
  //     if (error.response?.data?.meta?.error_code) {
  //       return reject(this.getSpiderfootError(error.response.data.meta));
  //     }
  //
  //     reject(error);
  //   });
  // }
}
