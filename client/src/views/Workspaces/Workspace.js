import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Grid } from "@mui/material";
// import MembersList from "./List";

const Workspace = ({ workspace }) => {
  const { documents, project_name, status, team, _id } = workspace;
  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Grid
            container
            direction="column"
            sx={{
              border: "1px",
              borderRadius: "8px",
              background: "#ffffff",
              padding: "7px",
            }}
          >
            <Grid item sx={{ display: "flex" }}>
              <Grid
                container
                sx={{ display: "grid", alignItems: "end", marginLeft: "0px" }}
              >
                <Box
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    lineHeight: "134.4%",
                    color: "#000000",
                    opacity: "0.3",
                  }}
                >
                  {"Project: "} {project_name}
                </Box>
                <Box
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    lineHeight: "134.4%",
                    color: "#000000",
                  }}
                >
                  {"Status: "}
                  {status}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <MembersList item={members} /> */}
      </Grid>
    </Box>
  );
};
export default Workspace;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Docs = styled.div``;
const Thread = styled.div``;
