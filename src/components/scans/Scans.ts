import Component from "../Component";
import {
  IScan,
  IScanSummaryItems,
  TScanResult,
  TScanSummaryItemsResult,
} from "./Scans.types";
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

    // fetch("http://localhost:5009/scansummary", {
    //   "headers": {
    //     "accept": "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "en-US,en;q=0.9",
    //     "cache-control": "no-cache",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "pragma": "no-cache",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     "cookie": "Webstorm-26fd8f19=a1892be7-90dd-47f2-a94c-b6cd7bb0cc28; Webstorm-e52cbb7f=2221e2b2-64ac-4f07-9198-2f1030f5219c"
    //   },
    //   "referrer": "http://localhost:5009/scaninfo?id=2ADCF4C5",
    //   "referrerPolicy": "strict-origin-when-cross-origin",
    //   "body": "id=2ADCF4C5&by=type",
    //   "method": "POST",
    //   "mode": "cors"
    // });
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
