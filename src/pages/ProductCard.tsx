import { Component } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IProduct } from "../interface/Interface";
import toast from "react-hot-toast";

// Class component representing a product card with detailed information
class ProductCard extends Component<{
  item: IProduct;
  handleCardClick: (selectedProduct: IProduct) => void;
}> {
  // Function to handle the Add to Cart button click
  handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    // Retrieve existing cart items from localStorage
    const existingItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    // Add the current item to the cart
    const updatedCart = [...existingItems, this.props.item];

    console.log(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item added to the cart successfully");
  };

  render() {
    const { item, handleCardClick } = this.props;

    return (
      <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "center" }}>
        <Card
          onClick={() => {
            // Call handleCardClick with the selected product
            handleCardClick(item); // Pass the 'item' directly
          }}
          sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            width: "250px",
            height: "350px",
          }}
        >
          <Box display={"flex"} sx={{ padding: 2, justifyContent: "center" }}>
            <CardMedia
              component="img"
              height="140"
              width="200"
              image={item.product_Image}
              className="product-card-image"
              alt={item.product_Name}
              sx={{
                objectFit: "cover",
                width: "200px",
                height: "150px",
                borderRadius: "5px",
              }}
            />
          </Box>
          <CardContent>
            <Typography
              variant="h5"
              title={item.product_Name}
              sx={{
                cursor: "pointer",
                flex: "1",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {item.product_Name}
            </Typography>
            {item && (
              <Typography
                variant="body2"
                color="text.secondary"
                title={item.product_Description}
                sx={{
                  cursor: "pointer",
                  flex: "1",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {item.product_Description}
              </Typography>
            )}
            <Typography variant="h6" color="green">
              Price ₹{item.product_Price}
            </Typography>
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#189e35",
                  color: "white",
                  "&:hover": {
                    color: "#189e35",
                    backgroundColor: "white",
                  },
                }}
                onClick={this.handleAddToCart}
              >
                <AddShoppingCartIcon />
                Add To Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default ProductCard;
