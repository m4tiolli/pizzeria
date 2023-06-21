import "./SideBar.css";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
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
  const [pesquisas, setPesquisas] = useState([]);
  const [checkboxes, setCheckboxes] = useState({
    grande: false,
    pequena: false,
    doce: false,
    salgada: false,
    bebida: false,
    sobremesa: false,
  });
  const [pesquisasFormatadas, setPesquisasFormatadas] = useState("");

  const handleCheckboxPress = (checkboxName) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  useEffect(() => {
    let atLeastOneCheckboxChecked = false;
    for (const checkboxName in checkboxes) {
      if (checkboxes[checkboxName]) {
        atLeastOneCheckboxChecked = true;
        break;
      }
    }
    const updatedPesquisas = Object.keys(checkboxes).filter(
      (checkboxName) => checkboxes[checkboxName]
    );
    setPesquisas(updatedPesquisas);

    let pesquisasFormatadas = "";
    if (updatedPesquisas.length === 1) {
      pesquisasFormatadas = updatedPesquisas[0];
    } else {
      pesquisasFormatadas = updatedPesquisas.join(", ");
    }
    setPesquisasFormatadas(pesquisasFormatadas);
  }, [checkboxes]);

  return (
    <Menu width={"20%"} isOpen={false} menuClassName="meumenu">
      <h1 id="filterby">filter by: </h1>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="pizzas salgadas"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="pizzas doces"
            onChange={() => handleCheckboxPress("grande")}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="pizzas grandes"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="pizzas pequenas"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="sobremesas"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="bebidas"
          />
        </FormGroup>
      </ThemeProvider>

      <button id="filterbtn">filter</button>
    </Menu>
  );
}

export default SideBar;
