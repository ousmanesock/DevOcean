import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/Input/PrimaryInput";
import SelectBasic from "../../components/Select/Dropdown";
import { PrimaryButton } from "../../components/Button/Button";
import MultipleSelect from "../../components/MultiSelect/MultiSelect";

const statusList = [
  {
    name: "Resolved",
    value: "Resolved",
  },
  {
    name: "In progress",
    value: "In progress",
  },
  {
    name: "Open",
    value: "Open",
  },
];

const AddWorkSpace = () => {
  const [teams, setTeams] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState();

  useEffect(() => {
    fetch(`/teams`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data.data);
      });

    fetch(`/documents`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDocuments(data.data);
      });
      console.log(teams)
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeTeam = (e) => {
    setTeamName(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeDocuments = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedDocuments(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(selectedDocuments);
  };

  const handleAddWorkSpace = () => {
    console.log(name, teamName, selectedDocuments, status);
    const data = {
      project_name: name,
      documents: selectedDocuments,
      team: teamName,
      status: status,
    };
    fetch("/workspaces/addWorkspace", {
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
            Add Workspace
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
              options={teams}
              label={"Select Team"}
              handleChange={handleChangeTeam}
              value={teamName}
            />
          </Grid>
          <Grid item pt={3} xs={12}>
            <SelectBasic
              options={statusList}
              label={"Select status"}
              handleChange={handleChangeStatus}
              value={status}
            />
          </Grid>
          <Grid item pt={3} xs={12}>
            <MultipleSelect
              handleChange={handleChangeDocuments}
              value={selectedDocuments}
              options={documents}
              label={"Documents"}
            />
          </Grid>
        </Box>

        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          <PrimaryButton
            onClick={handleAddWorkSpace}
            variant="contained"
            fullWidth
          >
            {"Add WorkSpace"}
          </PrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddWorkSpace;
