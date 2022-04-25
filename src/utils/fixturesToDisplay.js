import _ from "lodash"

export const fixturesToDisplay = (fixtures) => {
    const grouped_fixtures = _.groupBy(fixtures, "league.name");
  
    const fixturesArr = _.toArray(grouped_fixtures);

  //Extracts all the league names from the fixtures array
  let leagues = Object.keys(grouped_fixtures);
  

  //  Get the fixtures to be displayed on component mount in front-end
  const display_fixtures = leagues.includes("Premier League")
    ? fixtures.filter(
        (fixture) => fixture.league.name === "Premier League"
      )
    : leagues.includes("UEFA Champions League")
    ? fixtures.filter(
        (fixture) => fixture.league.name === "UEFA Champions League"
      )
    : leagues.includes("UEFA Europa League")
    ? fixtures.filter(
        (fixture) => fixture.league.name === "UEFA Europa League"
      )
    : leagues.includes("FA Cup")
    ? fixtures.filter((fixture) => fixture.league.name === "FA Cup")
    : leagues.includes("League Cup")
    ? fixtures.filter((fixture) => fixture.league.name === "League Cup")
    : fixturesArr[0];

  return display_fixtures;
};
