import DarkModeToggle from "@/components/DarkModeToggle";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <p>My App</p>
      <Button color="primary">Hello dark mode</Button>
      <DarkModeToggle />
      {/* Rest of your component */}
    </div>
  );
};

export default Home;
