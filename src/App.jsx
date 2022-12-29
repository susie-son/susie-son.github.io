import React, { useRef } from "react";
import Resume from "./Resume";
import { Print } from '@mui/icons-material';
import { Fab } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useReactToPrint } from "react-to-print";
import "./App.css";

const App = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ae9ee1"
      },
      secondary: {
        main: "#efa9c5"
      },
    },
    typography: {
      h1: {
        fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "36pt",
        fontWeight: 500,
        color: "#939adf"
      },
      h2: {
        fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "16pt",
        fontWeight: 400,
        lineHeight: 2,
        color: "#939adf"
      },
      subtitle1: {
        fontSize: "10pt",
        lineHeight: 1.5,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "10pt",
        lineHeight: 1.5,
        fontWeight: 400,
      },
      overline: {
        fontSize: "10pt",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        textTransform: "none",
        fontWeight: 300,
      },
      body1: {
        fontSize: "10pt",
        fontWeight: 400
      },
      caption: {
        fontWeight: 300,
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Resume ref={componentRef} />
      <Fab
        id="fab"
        color="secondary"
        className="fab"
        aria-label="print"
        sx={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed"
        }}>
        <Print onClick={handlePrint} />
      </Fab>
    </ThemeProvider>
  );
}

export default App;
