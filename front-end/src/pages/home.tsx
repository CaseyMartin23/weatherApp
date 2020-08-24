import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const SearchButton = styled(Button)`
  background-color: #3f51b5;
  color: white;
  &:hover {
    background-color: #3f51b5;
  }
`;

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const onSearch = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" color="primary">
        Looking for the current weather in a city?
      </Typography>
      <Typography variant="h4" color="primary">
        Look no further!
      </Typography>
      <Box p={3}>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            console.log("Submitted! ->> ", userInput);
          }}
        >
          <div style={{ display: "inline-flex" }}>
            <input placeholder="Search..." onChange={onSearch} />
            <SearchButton type="submit">Search</SearchButton>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
