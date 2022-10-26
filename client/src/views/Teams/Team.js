import React from "react";
import { Box, Grid } from "@mui/material";
import MembersList from "./MembersList";

export default function Team({ item }) {
  const { members, team, workspace } = item;
  console.log("🚀 ~ file: Team.js ~ line 5 ~ Team ~ item", item);
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
                  {"Team: "} {team.name}
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
                  {"Project: "}
                  {workspace.project_name}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <MembersList item={members} />
      </Grid>
    </Box>
  );
}
