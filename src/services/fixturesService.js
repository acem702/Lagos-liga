import Kiniscores from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getTodaysFixtures = (day) => {
  return Kiniscores.get(`${kiniscoresApi}/fixtures?day=${day}`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/fixtures?day=${day}`);
};

export const getLeagueFixtures = (day, id) => {
  return Kiniscores.get(`${kiniscoresApi}/fixtures/${id}?day=${day}`);
  // return Kiniscores.get(
  //   `http://localhost:5001/api/v0/fixtures/${id}?day=${day}`
  // );
};

export const getNextLeagueFixtures = (id) => {
  return Kiniscores.get(`${kiniscoresApi}/fixtures/${id}/next`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/fixtures/${id}/next`)
};

export const getLastLeagueFixtures = (id) => {
  return Kiniscores.get(`${kiniscoresApi}/fixtures/${id}/last`);
  // return Kiniscores.get(`http://localhost:5001/api/v0/fixtures/${id}/last`)
};
export const getFixtureDetails = (id) => {
  // return Kiniscores.get(`http://localhost:5001/api/v0/fixtures/fixture/${id}`)
  return Kiniscores.get(`${kiniscoresApi}/fixtures/fixture/${id}`);
};

export const getHeadtoHead = (teamAId, teamBId) => {
  // return Kiniscores.get(`http://localhost:5001/api/v0/fixtures/h2h/${teamAId}/${teamBId}`)
  return Kiniscores.get(`${kiniscoresApi}/fixtures/h2h/${teamAId}/${teamBId}`);
};
