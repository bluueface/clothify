import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductService } from "../../service/productService";
import {
  loadProductsFailure,
  loadProductsSuccess,
} from "../../redux/reducer/ProductReducer";

interface PageInterface {
  currentPage: number;
  totalPages: number;
  totalElements: number;
}

interface Props {
  selectedId?: number;
}

const Products: React.FunctionComponent<Props> = ({ selectedId }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const [sortedBy, setSortedBy] = useState<string>("id");
  const [page, setPage] = useState<PageInterface>({
    currentPage: 0,
    totalPages: 1,
    totalElements: 0,
  });

  useEffect(() => {
    ProductService.getAllProducts(page.currentPage, selectedId)
      .then((res) => {
        dispatch(loadProductsSuccess(res.content));
        setPage({
          // eslint-disable-next-line node/no-unsupported-features/es-syntax
          ...page,
          totalPages: res.totalPages,
          totalElements: res.totalElements,
        });
      })
      .catch((error) => {
        dispatch(loadProductsFailure(error));
      });
  }, [selectedId, page.currentPage]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...page,
      currentPage: value - 1,
    });
  };

  const handleSortedByChange = (event: SelectChangeEvent) => {
    setSortedBy(event.target.value as string);
    setPage({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...page,
      currentPage: 0,
    });
  };
  return (
    <Box className="grid grid-cols-6 grid-rows-9 gap-2 p-2">
      <Box className="col-span-1 row-start-1 row-end-10 flex flex-col items-center gap-3 p-2 bg-black text-white">
        <Typography>Filter 1</Typography>
        <Typography>Filter 2</Typography>
        <Typography>Filter 3</Typography>
        <Typography>Filter 4</Typography>
      </Box>
      <Box className="col-span-5 row-start-1 row-end-2 px-3 flex items-center justify-between">
        <Typography>{`${page.totalElements} products`}</Typography>
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="select-label">Sorted by</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={sortedBy}
              label="Sorted by"
              onChange={handleSortedByChange}
            >
              <MenuItem value={20}>Price (Low to High)</MenuItem>
              <MenuItem value={30}>Price (High to Low)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className="col-span-5 row-start-2 row-end-9 grid place-items-center grid-cols-3 gap-4 md:grid-cols-4">
        {products &&
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Box>
      <Box className="col-span-5 row-start-9 row-end-10 flex items-center justify-center">
        <Pagination
          count={page.totalPages}
          page={page.currentPage + 1}
          onChange={handlePageChange}
          size="large"
          className="p-3"
        />
      </Box>
    </Box>
  );
};

export default Products;
