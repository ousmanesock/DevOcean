import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { documents } from "../../data";
import Card from "../../components/Card/Card";
import Team from "./Team";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(`/teams`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data.data);
      });
  }, []);
  console.log(teams);

  return (
    teams &&
    teams.map((team) => {
      return <Team item={team} />;
    })

    // <Card />
  );
};
export default Teams;

const Docs = styled.div``;
