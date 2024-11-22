import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { UserService } from "../../service/userService";
import { useDispatch } from "react-redux";
import { setConnectedUser } from "../../redux/reducer/userReducer";

const Register = () => {
  const dispatch = useDispatch();

  const [userType, setUserType] = useState<"BUYER" | "SELLER">("BUYER");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    UserService.register({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...formData,
      userType: userType,
    }).then((res) => {
      dispatch(setConnectedUser(res));
    });
  };

  return (
    <Box
      className="flex flex-col gap-4 p-6 m-6 max-w-md mx-auto"
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" className="font-bold" textAlign="center">
        Register Form
      </Typography>
      <FormControl>
        <RadioGroup
          value={userType}
          onChange={(e) => setUserType(e.target.value as "BUYER" | "SELLER")}
          row
        >
          <FormControlLabel value="BUYER" control={<Radio />} label="Buyer" />
          <FormControlLabel value="SELLER" control={<Radio />} label="Seller" />
        </RadioGroup>
      </FormControl>
      {userType === "SELLER" && (
        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          size="small"
          value={formData.businessName}
          onChange={(e) => handleInputChange("businessName", e.target.value)}
        />
      )}
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        size="small"
        value={formData.firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        size="small"
        value={formData.lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        size="small"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={formData.password}
        onChange={(e) => handleInputChange("password", e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        sx={{ backgroundColor: "black" }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;
