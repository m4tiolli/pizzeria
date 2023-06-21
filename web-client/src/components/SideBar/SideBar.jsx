import "./SideBar.css";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e1c1c",
    },
  },
});

function SideBar() {
  return (
    <Menu width={"20%"} isOpen={false} menuClassName="meumenu">
      <h1 id="filterby">filter by: </h1>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="pizzas salgadas"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="pizzas doces"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="pizzas grandes"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="pizzas pequenas"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="sobremesas"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="bebidas"
          />
        </FormGroup>
      </ThemeProvider>

      <button id="filterbtn">filter</button>
    </Menu>
  );
}

export default SideBar;
