import axios from "axios";

export class Request {
  static get(url) {
    return axios(url).then((res) => res.data);
  }
}
