import Service from "./Service";
import { IServiceOptions } from "./Service.types";

let service: Service;
export const getService = (): Service => {
  if (service) {
    return service;
  }

  const options: IServiceOptions = {
    instanceUrl: process.env.INSTANCE_URL,
  };
  service = new Service(options);
  return service;
};

/**
 * The tests
 */
describe("service", () => {
  const service = getService();
  it("should be an instance of Service", () => {
    expect(service).toBeInstanceOf(Service);
  });
});
