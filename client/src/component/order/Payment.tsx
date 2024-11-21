import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { OrderService } from "../../service/orderService";
import { setOrderToCreate } from "../../redux/reducer/orderReducer";
import { resetCart } from "../../redux/reducer/cartReducer";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const orderToCreate = useSelector(
    (state: RootState) => state.orders.orderToCreate,
  );

  const [open, setOpen] = useState<boolean>(false);

  const proceedPayment = () => {
    if (orderToCreate) {
      OrderService.addOrder(orderToCreate).then((res) => {
        console.log(res);
        dispatch(resetCart());
        dispatch(setOrderToCreate(undefined));
        setOpen(true);
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/products");
  };

  return (
    <Box className="flex justify-center items-center h-full">
      <Button
        variant="contained"
        size="large"
        sx={{ bgcolor: "black" }}
        onClick={proceedPayment}
      >
        Proceed payment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Clothify order is confirmed!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Order history
          </Button>
          <Button color="inherit" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Payment;
