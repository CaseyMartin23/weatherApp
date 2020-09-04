import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { CurrentWeatherType } from "./weatherTypes";

type CurrentWeatherProps = {
  currentWeather: CurrentWeatherType;
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  return (
    <Box p={3}>
      <Box p={3}>
        <div id="WeatherDisplay">
          <div style={{ display: "inline-flex" }}>
            <Typography variant="h3" style={{ verticalAlign: "bottom" }}>
              {currentWeather.main.temp} &#8451;
            </Typography>
            <img
              style={{
                height: "%150",
                width: "%150",
              }}
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
          </div>
          <div>
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
        </div>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
