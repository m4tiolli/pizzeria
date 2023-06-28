import './SideBar.css'
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e1c1c",
    },
  },
});

function SideBar({ pizza }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };

  const navigate = useNavigate();

  const handleFilterButtonClick = () => {
    navigate("/Search", {
      state: { filters: selectedFilters, pizza: pizza },
    });
  };

  return (
    <Menu width={"20%"} isOpen={false} menuClassName="meumenu">
      <h1 id="filterby">filtrar por: </h1>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="salgada"
              />
            }
            label="pizzas salgadas"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="doce"
              />
            }
            label="pizzas doces"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="grande"
              />
            }
            label="pizzas grandes"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="pequena"
              />
            }
            label="pizzas pequenas"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="sobremesa"
              />
            }
            label="sobremesas"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleCheckboxChange}
                value="bebida"
              />
            }
            label="bebidas"
          />
        </FormGroup>
      </ThemeProvider>

      <button id="filterbtn" onClick={handleFilterButtonClick}>
        filtrar
      </button>
    </Menu>
  );
}

export default SideBar;
