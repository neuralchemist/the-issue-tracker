import React from "react";
// mui 5
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// styled components
import { StyledFilter } from "./styledComponents"

function SelectFilter({ filterValue, setFilterValue }) {
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };
  return (
    <StyledFilter >
      <Select
        labelId="select-issue-filter-label"
        id="select-issue-filter"
        value={filterValue}
        displayEmpty
        onChange={handleChange}
        sx={{ width: '150px'}}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"created"}>Created</MenuItem>
        <MenuItem value={"assigned"}>Assigned</MenuItem>
      </Select>
    </StyledFilter>
  );
}

export default SelectFilter;
