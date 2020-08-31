import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";
import { StyledButton, StyledPaper } from "../components/styledComponents";

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
  /* vertical-align: bottom; */
  text-align: center;
  margin: 5px;
`;

const SearchButton = styled(StyledButton)``;

type CurrentWeatherType = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    speed: number;
  };
};

const Weather = () => {
  const [userInput, setUserInput] = useState("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>();
  const [searchError, setSearchError] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const onSearch = (e: any) => {
    const searchedValue = e.target.value.toLowerCase();
    setUserInput(searchedValue);
  };

  const onSubmit = async (e: any) => {
    setSearchError(false);
    e.preventDefault();
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
      setSearchError(true);
    }
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
          <form onSubmit={onSubmit}>
            <FormField>
              <SearchBar placeholder="Search..." onChange={onSearch} />
              <SearchButton type="submit">Search</SearchButton>
            </FormField>
            <FormField border={true}>
              <StyledButton style={{ margin: "5px" }}>Current</StyledButton>
              <StyledButton style={{ margin: "5px" }}>5 Days</StyledButton>
            </FormField>
          </form>
        </Box>
      </div>
      <Box p={3}>
        {searchError && (
          <div>
            <Typography color="error" variant="h4">
              Error: Not Found
            </Typography>
            <Typography color="error" variant="h4">
              Please check your spelling!
            </Typography>
          </div>
        )}
        {!searchError && currentWeather && currentWeather.main && (
          <StyledPaper>
            <Box p={3}>
              <div id="WeatherDisplay">
                <Typography>
                  Current Temperature: {currentWeather.main.temp} &#8451;
                </Typography>
                <img
                  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt="weatherIcon"
                />
                <Typography>
                  Might feel like: {currentWeather.main.feels_like} &#8451;
                </Typography>
                <Typography>
                  Maximum Temperature: {currentWeather.main.temp_max} &#8451;
                </Typography>
                <Typography>
                  Minimum Temperature: {currentWeather.main.temp_min} &#8451;
                </Typography>
              </div>
            </Box>
          </StyledPaper>
        )}
      </Box>
    </Box>
  );
};

export default Weather;
