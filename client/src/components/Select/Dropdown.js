import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectBasic from "@mui/material/Select";

export default function Select({ options, label, handleChange, value }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <SelectBasic
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options &&
            options.length &&
            options.map((option) => (
              <MenuItem
                value={
                  option._id
                    ? option._id
                    : option.name
                    ? option.name
                    : option.team._id
                }
              >
                {option.name
                  ? option.name
                  : option.project_name
                  ? option.project_name
                  : option.team.name}
              </MenuItem>
            ))}
        </SelectBasic>
      </FormControl>
    </Box>
  );
}
