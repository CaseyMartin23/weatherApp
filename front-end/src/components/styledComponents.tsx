import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const StyledButton = styled(Button)`
  background-color: #3f51b5;
  color: white;
  &:hover {
    background-color: #3f51b5;
  }
`;

export const FormField = styled.div`
  display: inline-flex;
`;

export const StyledPaper = styled(Paper)`
  background-color: lightblue;
`;

export const InfoHeader = styled(Typography)`
  padding: 5px;
`;
