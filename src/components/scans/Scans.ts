import qs from "qs";
import Component from "../Component";
import {
  IScan,
  IScanEventResults,
  IScanSummaryItems,
  IStartScanOptions,
  TDataType,
  TScanEventResults,
  TScanResult,
  TScanSummaryItemsResult,
} from "./Scans.types";
import {
  SpiderfootInvalidRequestError,
  SpiderfootPreconditionFailedRequestError,
  SpiderfootRequestError,
} from "../../Service.types";

export class Scans extends Component {
  public static startTimeout = 10000;

  public start(options: IStartScanOptions): Promise<string> {
    const typeList = options.typeList
      ? options.typeList.map((type) => `type_${type}`).join(",")
      : "";
    const data = qs.stringify({
      modulelist: options.moduleList ? options.moduleList.join(",") : "",
      scanname: options.scanName || "",
      scantarget: options.scanTarget || "",
      typelist: typeList,
      usecase: options.useCase || "",
    });

    return this.client
      .post<string>("startscan", data, {
        timeout: Scans.startTimeout,
      })
      .then((response) => response.data)
      .then((html) => {
        const invalidMatch = html.match(/Invalid request:.+\./i);
        if (invalidMatch) {
          throw new SpiderfootInvalidRequestError(invalidMatch.shift());
        }

        const scanIdMatch = html.match(/scanStatusView\("(.+)"\)/i);
        if (scanIdMatch) {
          return scanIdMatch[1];
        }

        throw new SpiderfootRequestError("A scan id could not be identified");
      });
  }

  public stop(id: string): Promise<Scans> {
    return this.client
      .get<string>("stopscan", {
        params: {
          id,
        },
      })
      .then((response) => response.data)
      .then((html) => {
        if (contentHasAlert(html)) {
          throw new SpiderfootRequestError(getAlertContent(html));
        }

        return this;
      });
  }

  public list(): Promise<IScan[]> {
    return this.client
      .post<TScanResult[]>(`scanlist`)
      .then((response) => response.data)
      .then((results) => (results ? results.map(getScanFromResult) : []));
  }

  public getSummaryItemsByType(id: string): Promise<IScanSummaryItems[]> {
    return this.client
      .post<TScanSummaryItemsResult[]>(`scansummary`, `id=${id}&by=type`)
      .then((response) => response.data)
      .then((results) =>
        results ? results.map(getSummaryItemsFromResult) : []
      );
  }

  public getScanEventResults(
    id: string,
    eventType: TDataType | string
  ): Promise<IScanEventResults[]> {
    const data = qs.stringify({
      id,
      eventType,
    });
    return this.client
      .post<TScanEventResults[]>(`scaneventresults`, data)
      .then((response) => response.data)
      .then((results) =>
        results ? results.map(getEventResultFromResult) : []
      );
  }

  public setFalsePositive(
    id: string,
    resultIds: string | string[],
    isFalsePositive: 0 | 1 = 1
  ): Promise<Scans> {
    const standardizedResultIds = Array.isArray(resultIds)
      ? resultIds
      : [resultIds];
    const data = qs.stringify({
      id,
      fp: isFalsePositive,
      resultids: `[${standardizedResultIds
        .map((resultId) => `"${resultId}"`)
        .join(",")}]`,
    });

    return this.client
      .post<string[]>(`resultsetfp`, data)
      .then((response) => response.data)
      .then((data) => {
        if (data[0] === "SUCCESS") {
          return this;
        }
        throw new SpiderfootPreconditionFailedRequestError(data.join(" - "));
      });
  }

  public delete(id: string): Promise<Scans> {
    const data = {
      id,
      confirm: 1,
    };
    return this.client
      .get<string>(`scandelete`, {
        params: data,
      })
      .then((response) => response.data)
      .then((html) => {
        if (contentHasAlert(html)) {
          throw new SpiderfootRequestError(getAlertContent(html));
        }

        return this;
      });
  }
}

const contentHasAlert = (html: string): boolean => !!html.match(/alert-error/);
const getAlertContent = (html: string): string =>
  html.match(/<h4>(.+)<\/h4>/i)[1] || "Unknown error";

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

const getSummaryItemsFromResult = (
  result: TScanSummaryItemsResult
): IScanSummaryItems => ({
  type: result[0],
  name: result[1],
  lastDataElement: result[2],
  totalElements: result[3],
  uniqueElements: result[4],
});

const getEventResultFromResult = (
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
  dataType: result[10] as TDataType,
});
