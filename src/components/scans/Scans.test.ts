import { getService } from "../../Service.test";
import { Scans } from "./Scans";
// import {} from "./Scans.types";

const service = getService();

/**
 * The tests
 */
describe("service.scans", () => {
  it("should be an instance of Scans", () => {
    expect(service.scans).toBeInstanceOf(Scans);
  });
});
