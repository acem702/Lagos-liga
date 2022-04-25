import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/common/navbar/main-navbar";
import Sidebar from "./components/common/sidebar";
import Results from "./pages/results";
import LeagueStandings from "./pages/standings/league_standings";
import Scorers from "./pages/scorers";
import AllFixtures from "./pages/fixtures/all_fixtures";
import NewsStream from "./pages/news-stream";
import AdminPanel from "./pages/admin";
import NextFixtures from "./pages/fixtures/next_fixtures";
import LastFixtures from "./pages/fixtures/last_fixtures";
import LeagueFixtures from "./pages/fixtures/league_fixtures";
import NewsBody from "./pages/news-details";
import MatchDetails from "./pages/match-details";
import CupStandings from "./pages/standings/cup_standings";
import Column from "./pages/column";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Sidebar />
      <div className="app__body">
        <Switch>
          <Route path="/fixture/:id" component={MatchDetails} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/scorers/:league/:league_id" component={Scorers} />
          <Route
            path="/standings/:league/:league_id"
            component={LeagueStandings}
          />
          <Route path="/tables/:league/:league_id" component={CupStandings} />
          <Route path="/news/:id" component={NewsBody} />
          <Route path="/results/:league/:league_id" component={Results} />
          <Route
            path="/fixtures/last/:league/:league_id"
            component={LastFixtures}
          />
          <Route
            path="/fixtures/next/:league/:league_id"
            component={NextFixtures}
          />
          <Route
            path="/fixtures/:league/:league_id"
            component={LeagueFixtures}
          />
          <Route path="/fixtures" component={AllFixtures} />
          <Route path="/column" component={Column} />
          <Route path="/" component={NewsStream} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
