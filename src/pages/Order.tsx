import { Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { IProduct } from "../interface/Interface";

// Functional component for displaying details of an ordered product
const Order = () => {
  const { state } = useLocation();
  const orderedProduct: IProduct | undefined =
    state?.selectedItem || state.selectedProduct;

  return (
    <Container
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          padding: 2,
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        }}
      >
        {orderedProduct?.product_Name != null && (
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", color: "green" }}
          >
            Ordered Product Details
          </Typography>
        )}

        {orderedProduct?.product_Name != null && (
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bolder", mb: 1 }}>
              Product Name
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {orderedProduct.product_Name}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: "bolder", mb: 1 }}>
              About Product
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {orderedProduct.product_Description}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: "bolder", mb: 1 }}>
              Price
            </Typography>
            <Typography sx={{ mb: 2 }}>
              ₹{orderedProduct.product_Price}
            </Typography>
          </Box>
        )}

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mt: 2, color: "green", fontWeight: "bold" }}
        >
          Thank you for your order! Your products will be shipped soon.
        </Typography>
      </Box>
    </Container>
  );
};

export default Order;
