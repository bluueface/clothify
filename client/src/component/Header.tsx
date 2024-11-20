import React, { useState } from "react";
import { Box, TextField, InputAdornment, Chip } from "@mui/material";
import {
  LocalMallOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

declare type Filter =
  | "New in"
  | "Clothing"
  | "Shoes"
  | "Accessories"
  | "Discounts";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [hoveredItem, setHoveredItem] = useState<Filter | null>(null);

  const navItems: Record<Filter, string[]> = {
    "New in": ["Trending", "Latest", "Collections"],
    Clothing: ["Pants", "Denim", "Jacket"],
    Shoes: ["Sneakers", "Boots", "Sandals"],
    Accessories: ["Hats", "Bags", "Jewelry"],
    Discounts: ["50% Off", "Clearance", "Special Offers"],
  };

  const renderNavItem = (label: Filter) => (
    <Box
      className="py-4 uppercase font-black text-black cursor-pointer relative"
      onMouseEnter={() => setHoveredItem(label)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {label}
      {hoveredItem === label && (
        <Box
          className="absolute top-full left-0 bg-black text-white text-sm font-normal shadow-lg rounded  z-50"
          sx={{ minWidth: "200px" }}
        >
          {navItems[label].map((item) => (
            <Box
              key={item}
              className="p-2 normal-case cursor-pointer hover:underline"
              onClick={() => console.log(`Clicked: ${item}`)}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <Box className=" p-2 flex flex-col justify-between h-40 bg-black text-white shadow-lg">
      <Box className="p-4 flex flex-row justify-between">
        <Box className="p-2 font-bold h-fit">CLOTHIFY</Box>
        <Box className="flex justify-between gap-3 w-1/2 h-fit">
          <TextField
            variant="filled"
            placeholder="What are you looking for?"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchOutlined />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              width: "80%",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "50px",
              "& .MuiInputBase-input": {
                padding: "10px 8px",
                display: "flex",
                alignItems: "center",
              },
              "& .MuiInputAdornment-root": {
                marginTop: "0px",
              },
            }}
          />
          <PersonOutlined fontSize="large" />
          <Box>
            <LocalMallOutlined
              fontSize="large"
              className="cursor-pointer"
              onClick={() => navigate("/shopping-cart")}
            />
            {cartItems.length > 0 && (
              <Chip
                label={String(
                  cartItems.reduce((sum, item) => sum + item.quantity, 0),
                )}
                color="error"
                variant="filled"
                size="small"
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center gap-10 bg-white relative">
        {renderNavItem("New in")}
        {renderNavItem("Clothing")}
        {renderNavItem("Shoes")}
        {renderNavItem("Accessories")}
        {renderNavItem("Discounts")}
      </Box>
    </Box>
  );
};

export default Header;
