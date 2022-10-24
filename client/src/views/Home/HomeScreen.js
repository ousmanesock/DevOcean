import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import InfoCard from "../../components/InfoCard/InfoCard";

const HomeScreen = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [openWorkSpace, setOpenWorkSpace] = useState("");
  const [resolvedWorkspace, setResolvedWorkspace] = useState("");
  const [inProgress, setInProgress] = useState({});

  useEffect(() => {
    fetch(`/workspaces`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data.data);
        data.data.map((workspace) => {
          if (workspace.status === "resolved") {
            setResolvedWorkspace(workspace);
          } else if (workspace.status === "open") {
            setOpenWorkSpace(workspace);
          } else {
            setInProgress(workspace);
          }
        });
      });
    //     const getWorkspaces = axios
    //       .get("https://localhost:8000/workspaces")
    //       .then((response) => {
    //         console.log(
    //           "🚀 ~ file: Workspaces.js ~ line 17 ~ useEffect ~ response",
    //           response
    //         );
    //         return setWorkspaces(response.data.total);
    //       });
  }, []);
  console.log(workspaces);
  return (
    <>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          sm={12}
          md={12}
        >
          <InfoCard info={resolvedWorkspace} />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <InfoCard info={inProgress} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <InfoCard info={openWorkSpace} />
        </Grid>
      </Grid>
    </>
  );
};
export default HomeScreen;
