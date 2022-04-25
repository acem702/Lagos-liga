import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../utils/competitions";
import { getLeagueStandings } from "../../services/standingsService";
import CupTable from "../../components/shared/tables/cup-table"
import CupStandingsSkeleton from "../../components/common/skeletons/standings/cup-standings";
import StandingsDropdown from "../../components/shared/dropdowns/standings";

const CupStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getTable = async () => {
      try {
        const { data } = await getLeagueStandings(league_id);
        setStandings(data.standings);
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
        <CupStandingsSkeleton />
      ) : (
        <>
          <div className="relative mx-4">
            <StandingsDropdown league={league}/>
          </div>

          {standings.map((standing, index) => (
            <CupTable key={index} tables={standing} />
          ))}
        </>
      )}
    </div>
  );
};

export default CupStandings;
