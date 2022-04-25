import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../utils/competitions";
import { getLeagueScorers } from "../../services/scorerService";
import ScorersTable from "../../components/shared/tables/scorersTable";
import SkeletonScorers from "../../components/common/skeletons/scorers";

const Scorers = () => {
  const [scorers, setScorers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getScorers = async () => {
      try {
        const { data: scorers } = await getLeagueScorers(league_id);
        setScorers(scorers);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getScorers();
  }, [league_id]);
  return (
    <div>
      {!isLoading && scorers.length === 0 && (
        <h1 className="text-sm font-semibold text-blue-800  text-center mx-auto mt-8 sm:text-3xl ">
          No goal scorers for the current season
        </h1>
      )}
      {isLoading ? (
        <SkeletonScorers />
      ) : (
        scorers.length !== 0 && (
          <div>
            <ScorersTable scorers={scorers} league={league}/>
          </div>
        )
      )}
    </div>
  );
};

export default Scorers;
