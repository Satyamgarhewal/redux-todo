import styled from "@emotion/styled";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export const TodoBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
}));

export const TodoInput = styled(TextField)(({}) => ({
  width: "100%",
  maxWidth: "400px",
  marginBottom: "20px",
}));

export const TodoButton = styled(Button)(({}) => ({
  width: "100%",
  maxWidth: "200px",
  marginBottom: "20px",
}));

export const TodoCheckbox = styled(Checkbox)(({}) => ({
  width: "100%",
  maxWidth: "200px",
  marginBottom: "20px",
}));

export const TodoFormControlLabel = styled(FormControlLabel)(({}) => ({
  width: "100%",
  maxWidth: "200px",
  fontSize: "1.5rem",
  marginBottom: "20px",
}));
