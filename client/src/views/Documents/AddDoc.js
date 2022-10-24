import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/Input/PrimaryInput";
import { SelectBasic } from "../../components/Select/Dropdown";
import { PrimaryButton } from "../../components/Button/Button";
import MultipleSelect from "../../components/MultiSelect/MultiSelect";

const AddDocument = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch(`/documents`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDocs(data.data);
      });
  }, []);
  console.log(docs);

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
            Add Document
          </Typography>
        </Grid>
        <Box pt={3} sx={{ width: "100%" }}>
          <Grid sx={{ width: "100%" }} pt={3} item xs={12}>
            <PrimaryInput
              label={"Title"}
              type={"text"}
              name="title"
              fullWidth
              placeholder={"Title"}
            />
          </Grid>
          <Grid item pt={3} xs={12}>
            <PrimaryInput
              label={"Body"}
              type={"text"}
              name="body"
              fullWidth
              placeholder={"Body"}
            />
          </Grid>
        </Box>

        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          <PrimaryButton variant="contained" fullWidth>
            {"Add Document"}
          </PrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddDocument;
