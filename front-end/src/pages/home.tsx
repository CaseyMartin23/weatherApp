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
  const [currentWeather, setCurrentWeather] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;

  const onSearch = (e: any) => {
    const searchedValue = e.target.value.toLowerCase();
    setUserInput(searchedValue);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${apiKey}`
      )
        .then((res: any) => res.json())
        .then((data: any) => setCurrentWeather(data));
    } catch (e) {
      console.log("ERROR!! ->>", e);
    }
  };

  return (
    <Box p={3}>
      {console.log("apiKey->>", apiKey)}
      {console.log("currentWeather->>", currentWeather)}
      <Typography variant="h5" color="primary">
        Looking for the current weather in a city?
      </Typography>
      <Typography variant="h4" color="primary">
        Look no further!
      </Typography>
      <Box p={3}>
        <form onSubmit={onSubmit}>
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
