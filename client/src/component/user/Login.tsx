import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserService } from "../../service/userService";
import { setConnectedUser } from "../../redux/reducer/userReducer";
import { LoginRequest } from "../../util/types";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(email);
    UserService.login({ email, password } as LoginRequest).then((res) => {
      dispatch(setConnectedUser(res));
      navigate(location.state?.from?.pathname || "/", { replace: true });
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
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        size="small"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        sx={{ backgroundColor: "black" }}
      >
        Login
      </Button>
      <Typography variant="body2" color="textSecondary" textAlign="center">
        Do not have an account?{" "}
        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Button>
      </Typography>
    </Box>
  );
};

export default Login;
