import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { IProduct } from "../interface/Interface";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Functional component to display and manage the cart items
const AddToCart = () => {
  const navigate = useNavigate();
  const cartItemsString = localStorage.getItem("cartItems");
  const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];

  //calculate the price for all cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total: number, item: IProduct) => total + Number(item.product_Price),
      0
    );
  };
  //buyAll product buttion click
  const handleBuyNow = () => {
    // Remove all items from localStorage and cart
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");

    toast.success("successfully order placed");
    // Navigate to the order page with all selected items (empty array)
    navigate("/products/order", { state: { selectedItem: [], index: -1 } });
  };

  return (
    <Container sx={{ marginTop: "100px", heigh: "100vh", marginBottom: 5 }}>
      <Box sx={{ width: "100wv" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Cart Item Details
        </Typography>
      </Box>
      <Grid>
        <Typography>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: IProduct, index: number) => (
              <Grid item key={index}>
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    padding: 3,
                    marginBottom: 2, // Add margin-bottom to create a gap between items
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                    gap: 5,
                    position: "relative",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.product_Image}
                      alt="medicine"
                      width={"150px"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Typography sx={{ marginBottom: 1 }}>
                      <Typography sx={{ fontWeight: "bold", marginRight: 2 }}>
                        Name
                      </Typography>
                      {item.product_Name}
                    </Typography>
                    <Typography sx={{ marginBottom: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Description
                      </Typography>
                      {item.product_Description}
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: 1,
                        display: "flex",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", marginRight: 2 }}>
                        Price&nbsp;:
                      </Typography>
                      ₹{item.product_Price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center", // Center the text horizontally
                marginTop: "100px", // Adjust the top margin as needed
              }}
            >
              Your cart is empty
            </Typography>
          )}
        </Typography>
      </Grid>
      {cartItems && cartItems.length > 0 && (
        <>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Total Price: ₹{calculateTotalPrice()}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#189e35",
                color: "white",
                "&:hover": {
                  color: "#189e35",
                  backgroundColor: "white",
                },
              }}
              onClick={() => handleBuyNow()}
            >
              Buy All Products
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default AddToCart;
