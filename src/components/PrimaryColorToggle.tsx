import { ThemeContext } from "@/styles/CustomThemeProvider";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

const PrimaryColorToggle = () => {
  const { togglePrimaryColor } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        marginTop: "20px",
      }}
    >
      <Typography color="primary">
        Select a color to change the primary color
      </Typography>
      <Button variant="outlined" onClick={() => togglePrimaryColor("#0000FF")}>
        Blue
      </Button>
      <Button variant="outlined" onClick={() => togglePrimaryColor("#FFFF00")}>
        Yellow
      </Button>
      <Button variant="outlined" onClick={() => togglePrimaryColor("#008000")}>
        Green
      </Button>
    </Box>
  );
};

export default PrimaryColorToggle;
