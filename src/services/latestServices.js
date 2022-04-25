import Kiniscores from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getLatestNews() {
  return Kiniscores.get(`${kiniscoresApi}/news`);
}

export function getLatestNewsBody(id) {
  return Kiniscores.get(`${kiniscoresApi}/news/${id}`);
  //   return Kiniscores.get(`http://localhost:5001/api/news/${id}`);
}

export function getTweets() {
  return Kiniscores.get(`${kiniscoresApi}/recent/tweets`);
  // return Kiniscores.get(`http://localhost:5001/api/recent/tweets`);
}
