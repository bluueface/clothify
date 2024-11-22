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

const Register = () => {
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    businessName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    console.log("Form Data:", { ...formData, userType });
    // Add your signup logic here
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
        Register
      </Typography>
      <FormControl>
        <RadioGroup
          value={userType}
          onChange={(e) => setUserType(e.target.value as "buyer" | "seller")}
          row
        >
          <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
          <FormControlLabel value="seller" control={<Radio />} label="Seller" />
        </RadioGroup>
      </FormControl>
      {userType === "seller" && (
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
        Sign Up
      </Button>
    </Box>
  );
};

export default Register;
