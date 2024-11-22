import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { ProductInterface } from "../../util/types";
import { ProductService } from "../../service/productService";

interface Props {
  productsToRate: ProductInterface[];
  isRatingModalOpen: boolean;
  setRatingModalOpen: (value: boolean) => void;
}

const RateProduct: React.FunctionComponent<Props> = ({
  productsToRate,
  isRatingModalOpen,
  setRatingModalOpen,
}) => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [comments, setComments] = useState<Record<number, string>>({});

  const handleRatingChange = (productId: number, value: number | null) => {
    setRatings((prev) => ({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...prev,
      [productId]: value || 0,
    }));
  };

  const handleCommentChange = (productId: number, value: string) => {
    setComments((prev) => ({
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ...prev,
      [productId]: value,
    }));
  };

  const handleSubmit = () => {
    // Create a new array with the updated ratings and comments
    const updatedProducts = productsToRate.map((product) => {
      return {
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        ...product,
        ratings: [
          ...product.ratings,
          {
            product: product,
            rate: ratings[product.id] || 0,
            comment: comments[product.id] || "",
          },
        ],
      };
    });

    ProductService.rateProduct(updatedProducts).then((res) => {
      console.log(res);
    });

    setRatingModalOpen(false);
  };

  return (
    <Modal
      open={isRatingModalOpen}
      onClose={() => setRatingModalOpen(false)}
      className="grid place-items-center"
    >
      <Box className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        {productsToRate?.length ? (
          productsToRate.map((product) => (
            <Box key={product.id} className="my-4">
              <Typography variant="subtitle1">{product.title}</Typography>
              <Rating
                name={`rating-${product.id}`}
                value={ratings[product.id] || 0}
                onChange={(e, value) => handleRatingChange(product.id, value)}
                className="mb-2"
              />
              <TextField
                label="Add a comment"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={comments[product.id] || ""}
                onChange={(e) =>
                  handleCommentChange(product.id, e.target.value)
                }
              />
              <Divider className="my-2" />
            </Box>
          ))
        ) : (
          <Typography>No products to rate.</Typography>
        )}

        <Box className="mt-4 flex gap-4">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!Object.keys(ratings).length}
          >
            Submit Rating
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setRatingModalOpen(false)}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RateProduct;
