import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import {
  LocalMallOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";

declare type Filter =
  | "New in"
  | "Clothing"
  | "Shoes"
  | "Accessories"
  | "Discounts";

const Header = () => {
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
        <Box className="flex justify-between gap-4 w-1/2 h-fit">
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
          <LocalMallOutlined fontSize="large" />
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

//const navigate = useNavigate();

// const [dialogOpen, setDialogOpen] = useState<boolean>(false);
// const [items, setItems] = useState<ReactNode[]>([]);
//
// const onClose = () => {
//   setDialogOpen(false);
//   setItems([]);
// };
//
// const renderListItem = (label: string) => {
//   return (
//     <ListItem key={label} disableGutters className="m-2 bg-red-600">
//       <ListItemText primary={label} />
//     </ListItem>
//   );
// };
//
// const handleNavItemClicked = (filter?: Filter) => {
//   const newItems: ReactNode[] = [];
//
//   switch (filter) {
//     case "Clothing":
//       newItems.push(renderListItem("Denim"));
//       newItems.push(renderListItem("Pants"));
//       newItems.push(renderListItem("Cargo"));
//       break;
//     case "Shoes":
//       newItems.push(renderListItem("Boots"));
//       newItems.push(renderListItem("Sneakers"));
//       break;
//     default:
//       break;
//   }
//
//   setItems(newItems);
//   setDialogOpen(true);
// };
//
