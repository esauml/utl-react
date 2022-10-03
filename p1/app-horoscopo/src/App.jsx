import { Box } from "@mui/material";
import { NavBar } from "./components";
import { Horoscopo } from "./pages";


const App = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ mt: 1 }}>
        <Horoscopo />
      </Box>
    </>
  );
};

export default App
