import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";
import { StyledPaper } from "../components/styledComponents";

const InfoHeader = styled(Typography)`
  padding: 5px;
`;

const Help = () => {
  return (
    <Box p={3}>
      <StyledPaper>
        <Box p={2}>
          <InfoHeader color="primary" variant="h5">
            <b>Welcome to my Weather Application</b>
          </InfoHeader>
          <Typography variant="body1">
            Are you traveling to a city, and want to pack your suitcase
            according to its weather conditions?
          </Typography>
          <Typography variant="body1">
            Or are you just curious about a city's weather conditions
          </Typography>
          <Typography variant="body1">
            While you came to the right place then!
          </Typography>
        </Box>
      </StyledPaper>
      <Box p={3}>
        <Typography color="primary" variant="h5">
          So, How do I use it?
        </Typography>
        <Typography variant="h6">
          It's as simple as typing the city's name
          <br />
          and then clicking on search button
          <br />
          (or pressing the search button if your use a touch screen device)
        </Typography>
      </Box>
      {/* <Box p={2}>
        <Typography>
          Would you like to see how its been made?
          <br />
          Check out my repository!
        </Typography>
        
      </Box> */}
    </Box>
  );
};

export default Help;
