import { getService } from "../../Service.test";
import { Scans } from "./Scans";
import { IStartScanOptions } from "./Scans.types";

const service = getService();

/**
 * The tests
 * Due to the nature of Spiderfoot, tests can take a while.
 * I've built tests so I know it works but it's a manual process.
 * Someday, we might put some delay handling to enable full automated tests during build.
 */
describe("service.scans", () => {
  it("should be an instance of Scans", () => {
    expect(service.scans).toBeInstanceOf(Scans);
  });

  const options: IStartScanOptions = {
    moduleList: ["module_sfp_dnsresolve"],
    scanName: `Test ${new Date().getTime()}`,
    scanTarget: "github.com",
    typeList: ["DOMAIN_NAME", "DNS_TEXT"],
    useCase: "Passive",
  };
  let scanId: string = "";

  it.skip("should provide error feedback if a scan can not be started", async (done) => {
    const invalidOptions = {
      ...options,
      // @ts-ignore
      scanName: undefined,
    };

    expect.assertions(3);
    try {
      await service.scans.start(invalidOptions);
    } catch (error) {
      expect(error.isSpiderfootError).toBeTruthy();
      expect(error.code).toBe("406");
      expect(error.message).toMatch("Invalid request");
    }

    done();
  });

  it.skip(
    "should create a scan",
    async (done) => {
      const result = await service.scans.start(options);
      expect(result).toBeTruthy();
      expect(typeof result === "string").toBeTruthy();

      scanId = result;
      done();
    },
    Scans.startTimeout
  );

  it.skip("should retrieve scans", async (done) => {
    const scans = await service.scans.list();
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

    const testScan = scans.filter((scan) => scan.id === scanId).shift();
    expect(testScan).toBeTruthy();

    done();
  });

  it.skip("should get scan summary items", async (done) => {
    const scanSummaryItems = await service.scans.getSummaryItemsByType(scanId);

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

  it.skip("should get event results", async (done) => {
    const results = await service.scans.getEventResults(scanId, "DOMAIN_NAME");

    expect(Array.isArray(results)).toBeTruthy();
    results.forEach((result) => {
      expect(result.identified).toBeTruthy();
      expect(typeof result.identified === "string").toBeTruthy();
      expect(result.content).toBeTruthy();
      expect(typeof result.content === "string").toBeTruthy();
      expect(result.sourceDataElement).toBeTruthy();
      expect(typeof result.sourceDataElement === "string").toBeTruthy();
      expect(result.sourceModule).toBeTruthy();
      expect(typeof result.sourceModule === "string").toBeTruthy();
      expect(result.a).toBeGreaterThanOrEqual(0);
      expect(result.b).toBeGreaterThanOrEqual(0);
      expect(result.c).toBeGreaterThanOrEqual(0);
      expect(result.id).toBeTruthy();
      expect(typeof result.id === "string").toBeTruthy();
      expect(result.isFalsePositive).toBeGreaterThanOrEqual(0);
      expect(result.f).toBeGreaterThanOrEqual(0);
      expect(result.dataType).toBeTruthy();
      expect(typeof result.dataType === "string").toBeTruthy();
    });

    done();
  });

  it.skip("should set false positives", async (done) => {
    const eventResults = await service.scans.getEventResults(
      scanId,
      "DOMAIN_NAME"
    );
    expect(Array.isArray(eventResults)).toBeTruthy();
    const eventResult = eventResults.shift();
    expect(eventResult).toBeTruthy();

    const result = await service.scans.setFalsePositive(scanId, eventResult.id);
    expect(result).toBeInstanceOf(Scans);

    done();
  });

  it.skip("should get graph data", async (done) => {
    const results = await service.scans.getGraphData(scanId);
    expect(results.edges).toBeTruthy();
    expect(Array.isArray(results.edges));
    results.edges.forEach((edge) => {
      expect(edge.id).toBeTruthy();
    });
    expect(results.nodes).toBeTruthy();
    expect(Array.isArray(results.nodes));
    results.nodes.forEach((node) => {
      expect(node.id).toBeTruthy();
      expect(node.label).toBeTruthy();
      expect(node.color).toBeTruthy();
    });

    done();
  });

  it.skip("should delete", async (done) => {
    const result = await service.scans.delete(scanId);
    expect(result).toBeInstanceOf(Scans);

    done();
  });
});
