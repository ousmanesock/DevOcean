import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MembersList from "./List";

export default function Team({ item }) {
  const { members, team, workspace } = item;
  console.log("🚀 ~ file: Team.js ~ line 5 ~ Team ~ item", item);
  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {/* {statistics &&
					statistics.map((item) => ( */}
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
              <Grid item height={50} width={50}>
                {/* <Image src={item.image} /> */}
              </Grid>
              <Grid
                container
                sx={{ display: "grid", alignItems: "end", marginLeft: "10px" }}
              >
                <Box
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontFamily: "Mulish",
                    fontSize: "14px",
                    lineHeight: "134.4%",
                    color: "#000000",
                    opacity: "0.3",
                  }}
                >
                  {team.name}
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
                  {workspace.project_name}
                </Box>
              </Grid>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <Grid item sx={{ marginTop: "10px", display: "flex" }}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontFamily: "Mulish",
                    fontSize: "16px",
                    lineHeight: "134.4%",
                    color: "#666666",
                  }}
                >
                  {/* {item.status1type}:{" "} */}
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontFamily: "Mulish",
                      fontSize: "16px",
                      lineHeight: "134.4%",
                      color: "#000000",
                    }}
                  >
                    {/* {item.status1} */}
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                sx={{ marginTop: "10px", marginLeft: "10px", display: "flex" }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontFamily: "Mulish",
                    fontSize: "16px",
                    lineHeight: "134.4%",
                    color: "#666666",
                  }}
                >
                  {/* {item.status2type}:{" "} */}
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontFamily: "Mulish",
                      fontSize: "16px",
                      lineHeight: "134.4%",
                      color: "#000000",
                    }}
                  >
                    {/* {item.status2} */}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <MembersList item={members} />
        {/* ))} */}
      </Grid>
    </Box>
  );
}
