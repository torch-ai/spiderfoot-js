import Component from "../Component";
import {
  EnumDataTypes,
  IScan,
  IScanEventResults,
  IScanSummaryItems,
  TScanEventResults,
  TScanResult,
  TScanSummaryItemsResult,
} from "./Scans.types";
import { TDateString } from "../Component.types";
// import {} from "./Scans.types";

export class Scans extends Component {
  public getScans(): Promise<IScan[]> {
    return this.client
      .post<TScanResult[]>(`scanlist`)
      .then((response) => response.data)
      .then((results) => (results ? results.map(getScanFromResult) : []));
  }

  public getScanSummaryItemsByType(id: string): Promise<IScanSummaryItems[]> {
    return this.client
      .post<TScanSummaryItemsResult[]>(`scansummary`, `id=${id}&by=type`)
      .then((response) => response.data)
      .then((results) =>
        results ? results.map(getScanSummaryItemsFromResult) : []
      );
  }

  public getScanEventResults(
    id: string,
    eventType: EnumDataTypes | string
  ): Promise<IScanEventResults[]> {
    return this.client
      .post<TScanEventResults[]>(
        `scaneventresults`,
        `id=${id}&eventType=${eventType}`
      )
      .then((response) => response.data)
      .then((results) =>
        results ? results.map(getScanEventResultFromResult) : []
      );
  }

  public setFalsePositive(scanId: string, resultIds: string[]): Promise<Scans> {
    return this.client
      .post<TScanEventResults[]>(
        `resultsetfp`,
        `id=${scanId}&fp=1&resultids=${JSON.stringify(resultIds)}`
      )
      .then(() => this);
  }

  public deleteScan(id: string): Promise<Scans> {
    return this.client
      .get(`scandelete?id=${id}&confirm=1`)
      .then((response) => this);
  }
}

const getScanFromResult = (result: TScanResult): IScan => ({
  id: result[0],
  name: result[1],
  target: result[2],
  requested: result[3],
  started: result[4],
  finished: result[5],
  status: result[6] as IScan["status"],
  elements: result[7],
});

const getScanSummaryItemsFromResult = (
  result: TScanSummaryItemsResult
): IScanSummaryItems => ({
  type: result[0],
  name: result[1],
  lastDataElement: result[2],
  totalElements: result[3],
  uniqueElements: result[4],
});

const getScanEventResultFromResult = (
  result: TScanEventResults
): IScanEventResults => ({
  identified: result[0],
  content: result[1],
  sourceDataElement: result[2],
  sourceModule: result[3],
  a: result[4],
  b: result[5],
  c: result[6],
  id: result[7],
  isFalsePositive: result[8],
  f: result[9],
  dataType: result[10] as EnumDataTypes,
});
