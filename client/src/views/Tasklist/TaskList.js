import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Box, Grid, Typography } from "@mui/material";

import styled from "styled-components";

const TaskList = ({ tasklist }) => {
  const { tasks, workspace } = tasklist;
  console.log(tasklist, workspace);
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
                    fontWeight: 700,
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    lineHeight: "134.4%",
                    color: "#000000",
                    opacity: "0.3",
                  }}
                >
                  {"TaskList"}
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
                  {"Project Name: "} {workspace.project_name}
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
                  {"Status: "} {workspace.status}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Task item={tasks} />
        {/* ))} */}
      </Grid>
    </Box>
  );
};
export default TaskList;

const Wrapper = styled.div``;
