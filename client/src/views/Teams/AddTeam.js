import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/Input/PrimaryInput";
import SelectBasic from "../../components/Select/Dropdown";
import { PrimaryButton } from "../../components/Button/Button";
import MultipleSelect from "../../components/MultiSelect/MultiSelect";

const AddTeam = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [selectedMembers, setSelectedMembers] = useState();

  useEffect(() => {
    fetch(`/workspaces`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data.data);
      });

    fetch(`/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMembers(data.data);
      });
  }, []);
  console.log(workspaces);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeWorkspace = (e) => {
    setSelectedWorkspace(e.target.value);
  };

  const handleChangeMembers = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedMembers(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(selectedMembers);
  };

  const handleAddTeam = () => {
    console.log(name, selectedMembers, selectedWorkspace);
    const data = {
      name: name,
      members: selectedMembers,
      project: selectedWorkspace,
    };
    fetch("/addTeam", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return (
    <Grid
      alignItems="start"
      justifyContent="center"
      container
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Grid>
          <Typography variant="h5" noWrap component="a" href="">
            Add Teams
          </Typography>
        </Grid>
        <Box pt={3} sx={{ width: "100%" }}>
          <Grid sx={{ width: "100%" }} pt={3} item xs={12}>
            <PrimaryInput
              label={"Name"}
              type={"text"}
              name="name"
              fullWidth
              placeholder={"Name"}
              onChange={handleChangeName}
              value={name}

              // startAdornment={<Email color="disabled" />}
            />
          </Grid>
          <Grid item pt={3} xs={12}>
            <SelectBasic
              options={workspaces}
              label={"Select Project"}
              handleChange={handleChangeWorkspace}
              value={selectedWorkspace}
            />
          </Grid>
          <Grid item pt={3} xs={12}>
            <MultipleSelect
              handleChange={handleChangeMembers}
              value={selectedMembers}
              options={members}
              label={"Select Members"}
            />
          </Grid>
        </Box>

        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          <PrimaryButton onClick={handleAddTeam} variant="contained" fullWidth>
            {"Add Team"}
          </PrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddTeam;
