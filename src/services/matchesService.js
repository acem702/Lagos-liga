import Kiniscores from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getLeagueResults(matchday, id) {
  return Kiniscores.get(`${kiniscoresApi}/results/${id}/${matchday}`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/results/${id}/${matchday}`)
}

export function getMatchday(id) {
  return Kiniscores.get(`${kiniscoresApi}/results/matchday/${id}`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/results/matchday/${id}`)
}
