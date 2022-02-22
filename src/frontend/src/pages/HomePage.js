import React, { useEffect, useState } from "react";
import TeamTile from "../components/TeamTile";
import "./HomePage.scss";

const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const res = await fetch(`http://localhost:8080/team`);
      const data = await res.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);
  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
