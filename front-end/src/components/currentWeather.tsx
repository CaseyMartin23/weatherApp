import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { StyledPaper } from "../components/styledComponents";

import { CurrentWeatherType } from "./weatherTypes";

type CurrentWeatherProps = {
  searchError: boolean;
  currentWeather: CurrentWeatherType;
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  searchError,
  currentWeather,
}) => {
  return (
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
  );
};

export default CurrentWeather;
