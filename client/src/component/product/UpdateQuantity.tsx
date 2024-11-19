import React from "react";
import { Box, Button, Typography } from "@mui/material";

const UpdateQuantity = () => {
  return (
    <Box className="flex flex-col gap-2 actions">
      {/* Label */}
      <Typography variant="body1" className="font-semibold">
        Quantity:
      </Typography>

      {/* Quantity Controls */}
      <Box
        className={`flex justify-between items-center font-bold rounded-md bg-gray-200 px-2 py-1`}
      >
        <Button
          //onClick={() => onChange(quantity - 1)}
          //disabled={quantity === 1}
          variant="outlined"
          size="small"
          className="text-gray-700 border-none hover:bg-gray-300"
        >
          -
        </Button>
        <Typography variant="body1">10</Typography>
        <Button
          //onClick={() => onChange(quantity + 1)}
          variant="outlined"
          size="small"
          className="text-gray-700 border-none hover:bg-gray-300"
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateQuantity;
