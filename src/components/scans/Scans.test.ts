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

  let scanId: string = "2ADCF4C5";

  it("should retrieve scans", async (done) => {
    const scans = await service.scans.getScans();
    expect(Array.isArray(scans)).toBeTruthy();

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

  it("should get scan summary items", async (done) => {
    const scanSummaryItems = await service.scans.getScanSummaryItemsByType(
      scanId
    );
    expect(Array.isArray(scanSummaryItems)).toBeTruthy();
    scanSummaryItems.forEach((scanSummaryItem) => {
      expect(scanSummaryItem.type).toBeTruthy();
      expect(typeof scanSummaryItem.type === "string").toBeTruthy();
      expect(scanSummaryItem.name).toBeTruthy();
      expect(typeof scanSummaryItem.name === "string").toBeTruthy();
      if (scanSummaryItem.lastDataElement) {
        expect(
          typeof scanSummaryItem.lastDataElement === "string"
        ).toBeTruthy();
      }
      expect(scanSummaryItem.totalElements).toBeGreaterThanOrEqual(0);
      expect(scanSummaryItem.uniqueElements).toBeGreaterThanOrEqual(0);
    });

    done();
  });

  it("should delete", async (done) => {
    const result = await service.scans.deleteScan(scanId);
    expect(result).toBeInstanceOf(Scans);

    done();
  });
});
