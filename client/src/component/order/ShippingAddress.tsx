import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Address } from "../../util/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setOrderToCreate } from "../../redux/reducer/orderReducer";

const ShippingAddress = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const orderToCreate = useSelector(
    (state: RootState) => state.orders.orderToCreate,
  );

  const [address, setAddress] = useState<Address>({
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    dispatch(
      setOrderToCreate({
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        ...orderToCreate,
        address: address,
      }),
    );
  }, [dispatch, address]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    navigate("/orders/payment");
  };

  return (
    <Box className="flex flex-col gap-4 p-3">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Shipping Address
      </Typography>
      <Box className="flex flex-row gap-3">
        <TextField
          label="Full name"
          name="name"
          value={address.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Street"
          name="street"
          value={address.street}
          onChange={handleChange}
          fullWidth
          required
        />
      </Box>
      <Box className="flex flex-row gap-3">
        <TextField
          label="City"
          name="city"
          value={address.city}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="State"
          name="state"
          value={address.state}
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box className="flex flex-row gap-3">
        <TextField
          label="Postal Code"
          name="postalCode"
          value={address.postalCode}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Country"
          name="country"
          value={address.country}
          onChange={handleChange}
          fullWidth
          required
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={handleSubmit}
        sx={{ bgcolor: "black" }}
      >
        Proceed to Billing
      </Button>
    </Box>
  );
};

export default ShippingAddress;
