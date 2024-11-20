import { useState } from "react";
import Product from "./Product";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const [sortedBy, setSortedBy] = useState<string>("");

  console.log("inside products: ", products);

  const handleChange = (event: SelectChangeEvent) => {
    setSortedBy(event.target.value as string);
  };
  return (
    <Box className="grid grid-cols-5 grid-rows-9 gap-2 p-2">
      <Box className="col-span-1 row-start-1 row-end-10 flex flex-col items-center gap-3 p-2 bg-black text-white">
        <Typography>Filter 1</Typography>
        <Typography>Filter 2</Typography>
        <Typography>Filter 3</Typography>
        <Typography>Filter 4</Typography>
      </Box>
      <Box className="col-span-4 row-start-1 row-end-2 px-3 flex items-center justify-between">
        <Typography>500+ products</Typography>
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="select-label">Sorted by</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={sortedBy}
              label="Sorted by"
              onChange={handleChange}
            >
              <MenuItem value={20}>Price (Low to High)</MenuItem>
              <MenuItem value={30}>Price (High to Low)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className="col-span-4 row-start-2 row-end-9 grid place-items-center grid-cols-3 gap-4 md:grid-cols-4">
        {products
          ?.slice(0, 12)
          ?.map((product) => <Product key={product.id} product={product} />)}
      </Box>
      <Box className="col-span-4 row-start-9 row-end-10 flex items-center justify-center">
        <Pagination count={10} size="large" className="p-3" />
      </Box>
    </Box>
  );
};

export default Products;
