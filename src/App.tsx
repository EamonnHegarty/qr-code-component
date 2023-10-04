import { Box } from "@mui/material";
import Card from "../src/components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card />
      </Box>
    </>
  );
}

export default App;
