import React, { useState } from "react";
import { Box, Chip, InputAdornment, TextField } from "@mui/material";
import {
  LocalMallOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { CategoryInterface } from "../util/types";

interface Props {
  setSelectedId?: (value?: number) => void;
}

const Header: React.FunctionComponent<Props> = ({ setSelectedId }) => {
  const navigate = useNavigate();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderClickableNavItem = (item: string) => (
    <Box
      className="py-4 uppercase font-black text-black cursor-pointer relative"
      onClick={() => {
        if (setSelectedId) {
          setSelectedId(undefined);
        }
        navigate("/products");
      }}
    >
      {item}
    </Box>
  );

  const renderNavItem = (item: CategoryInterface) => (
    <Box
      key={item.id}
      className="py-4 uppercase font-black text-black cursor-pointer relative"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {item.name}
      {hoveredItem === item.name && (
        <Box
          className="absolute top-full left-0 bg-black text-white text-sm font-normal shadow-lg rounded  z-50"
          sx={{ minWidth: "200px" }}
        >
          {item.subCategories.map((el) => (
            <Box
              key={el.id}
              className="p-2 normal-case cursor-pointer hover:underline"
              onClick={() => {
                if (setSelectedId) {
                  setSelectedId(el.id);
                }
                navigate("/products");
              }}
            >
              {el.name}
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
        {renderClickableNavItem("New in")}
        {categories?.map((category) => renderNavItem(category))}
        {renderClickableNavItem("Discounts")}
      </Box>
    </Box>
  );
};

export default Header;
