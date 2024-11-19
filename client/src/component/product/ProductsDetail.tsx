import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import UpdateQuantity from "./UpdateQuantity";

const ProductDetails = () => {
  return (
    <Box className="flex flex-row gap-8 justify-center py-4 h-fit">
      {/* Image Wrapper */}
      <Box className="w-2/6 flex justify-center">
        <img
          src={require("../../asset/1.jpg")}
          alt="product-image"
          className="object-cover h-fit"
        />
      </Box>

      {/* Details Section */}
      <Box className="w-3/6 bg-white p-6 flex flex-col gap-4">
        {/* Product Card */}
        <Box>
          <Typography variant="h5" className="font-bold">
            Product title
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600">
            $120.99
          </Typography>
        </Box>
        <Divider className="my-4" />

        {/* Category */}
        <Box className="flex flex-col gap-2">
          <Typography variant="body1" className="font-semibold">
            Category:
          </Typography>
          <Typography variant="body2" className="font-bold">
            Denim
          </Typography>
        </Box>

        {/* Quantity & Add to Cart */}
        <Box className="flex flex-col gap-4">
          <UpdateQuantity />
          <Button variant="contained" color="primary" className="w-full">
            Add to Cart
          </Button>
        </Box>
        <Divider className="my-4" />

        {/* Description */}
        <Box>
          <Typography variant="body1" className="font-semibold">
            Description:
          </Typography>
          <Typography variant="body2" className="text-gray-700">
            Tall t-shirts for every style and occasion. A good t-shirt is the
            ultimate wardrobe all-rounder, and we re here to tell you that tall
            guys shouldn t have to miss out. We ve got a giant (pun intended)
            collection of plain and printed tall t-shirts and vests for the more
            statuesque among us, so you ll find one or two for every situation.
            Choose a few bold prints you can pair with our tall jeans or
            tracksuits for casual day wear, or match block colours with a
            tailored blazer and tall dress pants if you re going for modern
            professional. Customise your look with zips, pockets, hoodies and
            collars and you re good to go, rocking your unique style. Style:
            Printed T-Shirt Design: Printed Fabric: Cotton Length: Regular
            Sleeve Length: Short Sleeve Details & Care 100% cotton. Model is 6 4
            and wears a size L
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
