import React from "react";
import LeaguesDropdown from "../../shared/dropdowns/leagues";

const NextFixturesHeader = ({ league }) => {
  const theme  =
    "";
  return (
    <div className="text-left my-4">
      <LeaguesDropdown title={`Last ${league} Fixtures`} page="fixtures/last" theme={theme} />
    </div>
  );
};

export default NextFixturesHeader;
