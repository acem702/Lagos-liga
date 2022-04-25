import Kiniscores from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getLeagueStandings(id) {
  return Kiniscores.get(`${kiniscoresApi}/standings/${id}`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/standings/${id}`)
}


