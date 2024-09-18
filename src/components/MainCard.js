import { useTheme } from "@emotion/react";
import {
  Button,
  Typography,
  TextField,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { forwardRef } from "react";
import "../styles/styles.css";

const MainCard = forwardRef(
  (
    {
      boxShadow,
      border = true,
      content = true,
      children,
      elevation,
      sx,
      shadow,
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();
    return (
      <div className="top-bar">
        <div className="title">
          When watches
          {/*when do I get it? When do you want it?*/}
          <FormControl sx={{ ml: 2, minWidth: 120 }}>
            <InputLabel id="select-page">Pages</InputLabel>
            <Select id="sample-select" labelId="sample-select-label">
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="search-bar">
          <TextField label="search" sx={{ width: "800px" }} />
        </div>
      </div>
    );
  }
);

export default MainCard;
