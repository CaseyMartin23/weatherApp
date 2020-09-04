import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {
  CurrentWeatherType,
  FiveDayForecastType,
} from "../components/weatherTypes";

import styled from "styled-components";
import { StyledButton, StyledPaper } from "../components/styledComponents";

import CurrentWeather from "../components/currentWeather";
import FiveDayForecast from "../components/fiveDayForecast";

type FormFieldProps = {
  border?: boolean;
};

const AnimatedForm = styled.div`
  top: 60px;
  transition: transform 2s;
  &:focus-within {
    transform: translateY(-100px);
  }
`;

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

const ForecastButton = styled(StyledButton)`
  margin: 5px;
  &:disabled {
    background-color: white;
    color: #3f51b5;
  }
`;

const Weather = () => {
  const [userInput, setUserInput] = useState("");
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherType | undefined
  >();
  const [fiveDayForecast, setFiveDayForecast] = useState<
    FiveDayForecastType | undefined
  >();
  const [searchError, setSearchError] = useState<Error | undefined>(undefined);
  const [isCurrentWeatherForecast, setIsCurrentWeatherForecast] = useState(
    true
  );

  const apiKey = process.env.REACT_APP_API_KEY;

  const onSearch = (e: any) => {
    const searchedValue = e.target.value.toLowerCase();
    setUserInput(searchedValue);
  };

  const getCurrentWeather = async () => {
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
      setSearchError(e);
    }
  };

  const getFiveDayForecast = async () => {
    try {
      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=${apiKey}`
      )
        .then((res: any) => {
          const statusText = res.statusText;
          if (statusText === "Not Found") {
            throw new Error("Not Found");
          } else if (statusText === "Bad Request") {
            throw new Error("Bad Request");
          } else if (statusText === "OK") {
            return res.json();
          }
        })
        .then((data: any) => setFiveDayForecast(data));
    } catch (e) {
      console.log(e);
      setSearchError(e);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSearchError(undefined);
    getCurrentWeather();
    getFiveDayForecast();
  };

  const onForecastChange = (e: any) => {
    const buttonID = e.target.parentElement.id;

    if (buttonID === "current") {
      setIsCurrentWeatherForecast(true);
    } else if (buttonID === "fiveDay") {
      setIsCurrentWeatherForecast(false);
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
          <AnimatedForm onSubmit={onSubmit}>
            <FormField>
              <SearchBar placeholder="Search..." onChange={onSearch} />
              <StyledButton type="submit">Search</StyledButton>
            </FormField>
            <FormField border={true}>
              <ForecastButton
                id="current"
                onClick={onForecastChange}
                disabled={isCurrentWeatherForecast}
              >
                Current
              </ForecastButton>
              <ForecastButton
                id="fiveDay"
                onClick={onForecastChange}
                disabled={isCurrentWeatherForecast ? false : true}
              >
                5 Days
              </ForecastButton>
            </FormField>
          </AnimatedForm>
        </Box>
      </div>
      {searchError && (
        <div>
          <Typography color="error" variant="h5">
            {`${searchError.name}:
            ${searchError.message}`}
          </Typography>
          <br />
          <Typography color="error" variant="h4">
            Please check your spelling! <br />
            If the problem still exists please contact me via email if possible.
          </Typography>
        </div>
      )}
      {!searchError && isCurrentWeatherForecast && currentWeather && (
        <CurrentWeather currentWeather={currentWeather} />
      )}

      {!searchError && !isCurrentWeatherForecast && fiveDayForecast && (
        <FiveDayForecast fiveDayForecast={fiveDayForecast} />
      )}
    </Box>
  );
};

export default Weather;
