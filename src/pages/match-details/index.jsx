import React, { useEffect, useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { getFixtureDetails } from "../../services/fixturesService";
import TeamsInfo from "./teams-info";
import MatchNavs from "./match-navs";
import Lineups from "./lineups";
import HeadtoHead from "./head-to-head";
import Stats from "./statistics";
import Events from "./match-events";
import SkeletonMatchDetails from "../../components/common/skeletons/match-details";

const MatchDetails = () => {
  const [fixture, setFixture] = useState({});
  const [loading , setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const getMatchDetails = async () => {
      const { data: fixture } = await getFixtureDetails(id);
      setFixture(fixture[0]);
      setLoading(false)
    };
    getMatchDetails();
  }, [id]);

  return (
    <div>
      <div className="lg:mx-6">
        {loading ?  <SkeletonMatchDetails/> : (
          <>
            
            <TeamsInfo fixture={fixture} />
            <MatchNavs id={id} />
            <Switch>
              <Route
                path={`/fixture/${id}/lineups`}
                render={(props) => <Lineups {...props} fixture={fixture} />}
              />
              <Route
                path={`/fixture/${id}/head-to-head`}
                render={(props) => <HeadtoHead {...props} fixture={fixture}/>}
              />
              <Route
                path={`/fixture/${id}/events`}
                render={(props) => <Events {...props} fixture={fixture}  />}
              />
              <Route
                path={`/fixture/${id}/stats`}
                render={(props) => <Stats {...props} fixture={fixture} />}
              />
            </Switch>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;
