import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { CartItemInterface } from "../../util/types";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../redux/reducer/cartReducer";
import { useDispatch } from "react-redux";
import { DeleteForever } from "@mui/icons-material";
import UpdateQuantity from "../product/UpdateQuantity";

interface Props {
  item: CartItemInterface;
}

const CartItem: React.FunctionComponent<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const { product } = item;
  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    if (quantity !== item.quantity) {
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      dispatch(updateItemQuantity({ ...item, quantity }));
    }
  }, [quantity, dispatch, item]);

  const removeItem = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <Box className="flex items-center gap-4 p-4 rounded-md shadow-md">
      <img
        src={product?.image}
        alt={product?.title}
        className="w-24 h-32 object-cover rounded-md"
      />
      <Box className="flex flex-1 flex-col justify-between">
        <Typography variant="body1">{product?.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${product?.price.toFixed(2)}
        </Typography>
        <Box className="m-2 bg-white flex items-end gap-2">
          <UpdateQuantity quantity={quantity} onChange={setQuantity} />
          <IconButton onClick={removeItem}>
            <DeleteForever fontSize="medium" color="error" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
