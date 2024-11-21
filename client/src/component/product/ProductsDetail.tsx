import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import UpdateQuantity from "./UpdateQuantity";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductService } from "../../service/productService";
import { CartItemInterface, ProductInterface } from "../../util/types";
import {
  addItemToCart,
  increaseItemQuantity,
} from "../../redux/reducer/cartReducer";

const ProductDetails = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [product, setProduct] = useState<ProductInterface>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (productId) {
      ProductService.getProductById(Number(productId))
        .then((res) => {
          setProduct(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [productId]);

  const addToCart = () => {
    let items: CartItemInterface[] = [];
    items = items.concat(cartItems);
    const itemToBeAdded = { product: product, quantity: quantity };

    if (items.find((item) => item.product?.id === product?.id)) {
      dispatch(increaseItemQuantity(itemToBeAdded));
    } else {
      items.push(itemToBeAdded);
      dispatch(addItemToCart(items));
    }
  };

  return (
    <>
      {product && (
        <Box className="flex flex-row gap-8 justify-center py-4 h-fit">
          <Box className="w-2/6 flex justify-center">
            <img
              src={product?.image}
              alt="product-image"
              className="object-cover h-fit"
            />
          </Box>
          <Box className="w-3/6 bg-white p-6 flex flex-col gap-4">
            <Box className="flex flex-col gap-2">
              <Typography variant="h5" className="font-bold">
                {product?.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "red" }}
              >
                {`$${product?.price}`}
              </Typography>
            </Box>
            <Divider className="my-4" />
            <Box className="flex flex-row items-center gap-2">
              <Rating
                name="half-rating-read"
                defaultValue={product?.ratingRate}
                precision={0.5}
                readOnly
              />
              <Typography>{product?.ratingCount}</Typography>
            </Box>
            <Divider className="my-4" />
            <Box className="flex flex-row items-center gap-2">
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Category:
              </Typography>
              <Typography variant="body2" className="font-bold">
                {product?.subCategory?.name}
              </Typography>
            </Box>
            <Divider className="my-4" />
            <Box className="flex flex-col gap-4">
              <UpdateQuantity quantity={quantity} onChange={setQuantity}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "black" }}
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to Cart
                </Button>
              </UpdateQuantity>
            </Box>
            <Divider className="my-4" />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Description:
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                {product?.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
