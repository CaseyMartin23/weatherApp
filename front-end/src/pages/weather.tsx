import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { CurrentWeatherType } from "../components/weatherTypes"

import styled from "styled-components";
import { StyledButton, StyledPaper } from "../components/styledComponents";

import CurrentWeather from "../components/currentWeather"

type FormFieldProps = {
  border?: boolean;
};

const FormField = styled.div<FormFieldProps>`
  margin: auto;
  bottom: 0px;
  padding: 5px;
`;

const SearchBar = styled.input`
  height: 34.5px;
  text-align: center;
  margin: 5px;
`;

const Weather = () => {
  const [userInput, setUserInput] = useState("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>();
  const [searchErrorOnCurrentWeather, setSearchErrorOnCurrentWeather] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const onSearch = (e: any) => {
    const searchedValue = e.target.value.toLowerCase();
    setUserInput(searchedValue);
  };

  const getCurrentWeather = async () => {
    setSearchErrorOnCurrentWeather(false);
    try {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${apiKey}`
      )
        .then((res: any) => {
          const statusText = res.statusText;
          if (statusText === "Not Found") {
            throw new Error("Not Found");
          } else if (statusText === "OK") {
            return res.json();
          }
        })
        .then((data: any) => setCurrentWeather(data));
    } catch (e) {
      console.log(e);
      setSearchErrorOnCurrentWeather(true);
    }
  }

  const getFiveDayForecast = async () => {

  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    
  };

  return (
    <Box p={3}>
      <div id="SearchBarAndHearder">
        <Typography variant="h5" color="primary">
          Looking for the current weather in a city?
        </Typography>
        <Typography variant="h4" color="primary">
          Look no further!
        </Typography>
        <Box p={3}>
          <form onSubmit={() => {}}>
            <FormField>
              <SearchBar placeholder="Search..." onChange={onSearch} />
              <StyledButton type="submit">Search</StyledButton>
            </FormField>
            <FormField border={true}>
              <StyledButton style={{ margin: "5px" }}>Current</StyledButton>
              <StyledButton style={{ margin: "5px" }}>5 Days</StyledButton>
            </FormField>
          </form>
        </Box>
      </div>
      
    </Box>
  );
};

export default Weather;
