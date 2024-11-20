import React, { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  quantity: number;
  onChange: (number: number) => void;
  style?: string;
}
const UpdateQuantity: React.FunctionComponent<PropsWithChildren<Props>> = ({
  quantity,
  onChange,
  children,
}) => {
  return (
    <Box className="flex flex-col gap-2 flex-grow">
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Quantity:
      </Typography>
      <Box
        className={`flex justify-between items-center font-bold rounded-md bg-gray-200`}
      >
        <Typography
          className="text-gray-700 cursor-pointer hover:bg-gray-300 rounded-md w-16 flex justify-center p-2"
          sx={{ fontWeight: 900 }}
          onClick={() => onChange(quantity - (quantity > 1 ? 1 : 0))}
        >
          -
        </Typography>
        <Typography variant="body1">{quantity}</Typography>
        <Typography
          className="text-gray-700 cursor-pointer hover:bg-gray-300 rounded-md w-16 flex justify-center p-2"
          sx={{ fontWeight: 900 }}
          onClick={() => onChange(quantity + 1)}
        >
          +
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default UpdateQuantity;
