import React from "react";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const StyledPaper = styled(Paper)`
  background-color: lightblue;
`;

const InfoHeader = styled(Typography)`
  padding: 5px;
`;

const ListItem = styled.li``;

const Info = () => {
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
      </Box>
      <div>
        <ul>
          <li>Step 1</li>
          <div>words words words words words </div>
          <li>Step 2</li>
          <div>words words words words words </div>
          <li>Step 3</li>
          <div>words words words words words </div>
          <li>Step 4</li>
          <div>words words words words words </div>
        </ul>
      </div>
    </Box>
  );
};

export default Info;
