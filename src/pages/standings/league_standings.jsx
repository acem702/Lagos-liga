import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../utils/competitions";
import { getLeagueStandings } from "../../services/standingsService";
import StandingTable from "../../components/shared/tables/league-table";
import SkeletonStandings from "../../components/common/skeletons/standings/league-standings";

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getTable = async () => {
      try {
        const { data } = await getLeagueStandings(league_id);
        setStandings(data.standings[0]);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setLoading(false);
      } catch (error) {
        console.log(error.toString());
      }
    };

    getTable();
  }, [league_id]);
  return (
    <div>
      {loading ? (
        <SkeletonStandings />
      ) : (
        <StandingTable standings={standings} league={league} />
      )}
    </div>
  );
};

export default Standings;
