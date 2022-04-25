import { kiniscoresApi } from "../config.json";
import Kiniscores from "./httpService";

export function getLeagueScorers(id) {
  return Kiniscores.get(`${kiniscoresApi}/scorers/${id}`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/scorers/${id}`);
}


