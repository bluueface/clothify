import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import React from "react";

interface Props {
  setSelectedId?: (value?: number) => void;
}

const Main: React.FunctionComponent<Props> = ({ setSelectedId }) => {
  return (
    <Box className="h-screen flex flex-col">
      <Box className="sticky top-0 z-50">
        <Header setSelectedId={setSelectedId} />
      </Box>
      <Box className="p-2 flex-grow">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
