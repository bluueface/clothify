import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Product = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
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
            sx={{ fontSize: "large", fontWeight: 600 }}
          >
            Product Name
          </Typography>
          <Typography variant="body2" sx={{ color: "red", fontSize: "large" }}>
            $120,99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
