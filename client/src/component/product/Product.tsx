import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProductInterface } from "../../util/types";

interface Props {
  product: ProductInterface;
}

const Product: React.FunctionComponent<Props> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card sx={{ width: 240 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={require("../../asset/1.jpg")}
          alt="product image"
          sx={{
            width: "240px",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{}}>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "medium", fontWeight: 400 }}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "red", fontSize: "large" }}>
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
