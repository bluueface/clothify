import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

const Cart: React.FunctionComponent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { items } = cart;

  const renderValueLabel = (label: string, value: number, bold?: boolean) => (
    <Box className="flex justify-between my-2">
      <Typography variant="body1" className={bold ? "font-bold" : ""}>
        {label}:
      </Typography>
      <Typography variant="body1" className={bold ? "font-bold" : ""}>
        ${value.toFixed(2)}
      </Typography>
    </Box>
  );

  if (items.reduce((acc, item) => acc + item.quantity, 0) === 0) {
    return (
      <Box className="flex justify-center items-center py-10">
        <Typography variant="h6" color="textSecondary">
          No items in the cart
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="flex flex-col md:flex-row gap-8 p-6">
      <Box className="flex-1 flex flex-col gap-4">
        {items.map((item) => (
          <CartItem key={item?.product?.id} item={item} />
        ))}
      </Box>
      <Box className="w-full h-fit md:w-1/3 bg-white p-6 shadow-lg rounded-md flex flex-col gap-1">
        {renderValueLabel("Subtotal", cart.total)}
        {renderValueLabel("Shipping", 0)}
        <Divider />
        {renderValueLabel("Total Amount", cart.total, true)}
        <Button
          variant="contained"
          fullWidth
          onClick={() => console.log("Proceed to checkout")}
          sx={{ bgcolor: "black" }}
        >
          Validate
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
