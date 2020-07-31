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

  it("should retrieve scans", async (done) => {
    const scans = await service.scans.getScans();
    scans.forEach((scan) => {
      expect(scan.id).toBeTruthy();
      expect(scan.target).toBeTruthy();
      expect(typeof scan.target === "string").toBeTruthy();
      expect(scan.requested).toBeTruthy();
      expect(typeof scan.requested === "string").toBeTruthy();
      if (scan.started) {
        expect(scan.started).toBeTruthy();
        expect(typeof scan.started === "string").toBeTruthy();
      }
      if (scan.finished) {
        expect(scan.finished).toBeTruthy();
        expect(typeof scan.finished === "string").toBeTruthy();
      }
      expect(scan.status).toBeTruthy();
      expect(typeof scan.status === "string").toBeTruthy();
      expect(scan.elements).toBeTruthy();
      expect(typeof scan.elements === "number").toBeTruthy();
    });
    done();
  });
});
