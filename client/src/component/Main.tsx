import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box className="h-screen flex flex-col">
      <Box className="sticky top-0 z-50">
        <Header />
      </Box>
      <Box className="p-2 flex-grow bg-yellow-50">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
