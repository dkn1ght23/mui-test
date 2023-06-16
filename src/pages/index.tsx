import DarkModeToggle from "@/components/DarkModeToggle";
import PrimaryColorToggle from "@/components/PrimaryColorToggle";
import { ThemeContext } from "@/styles/CustomThemeProvider";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const StyledTypography = styled(Typography)`
  color: black;
  background-color: #7393b3;
  padding: 5px;

  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <p>My Test App</p>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography color="primary">click here to change the mode</Typography>
        <DarkModeToggle />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Typography color="primary">Styled component example</Typography>
        <StyledTypography>I am Styled Typography</StyledTypography>
      </Box>
      <PrimaryColorToggle />
    </div>
  );
};

export default Home;
