import Component from "../Component";
import { IScan } from "./Scans.types";
// import {} from "./Scans.types";

export class Scans extends Component {
  public getScans(): Promise<IScan[]> {
    return this.client
      .post<string[][]>(`/scanlist`)
      .then((response) => response.data)
      .then((results) => results.map(getScanFromResults));
  }
}

const getScanFromResults = (result: string[]): IScan => {
  const scan: IScan = {
    id: result.shift(),
    name: result.shift(),
    target: result.shift(),
    requested: result.shift(),
    started: result.shift(),
    finished: result.shift(),
    status: result.shift() as IScan["status"],
    elements: 0,
  };
  const elements = result.shift() || 0;
  scan.elements =
    typeof elements === "string" ? parseFloat(elements) : elements;
  return scan;
};
