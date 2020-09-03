import React from "react";

import { FiveDayForecastType } from "./weatherTypes";

type FiveDayForecastProps = {
  fiveDayForecast: FiveDayForecastType;
};

const FiveDayForecast: React.FC<FiveDayForecastProps> = ({
  fiveDayForecast,
}) => {
  return (
    <div>
      <span>{fiveDayForecast.city.name}</span>
    </div>
  );
};

export default FiveDayForecast;
