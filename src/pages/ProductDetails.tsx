import { FunctionComponent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { IProduct } from "../interface/Interface";

// Functional component for displaying product details and handling buy button click
const ProductDetails: FunctionComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const selectedProduct: IProduct | undefined = state?.item;

  useEffect(() => {
    // Function to be executed when the component is unloaded
    const handlePageUnload = () => {
      localStorage.removeItem("selectedProducts");
    };

    // Add event listener for unload and clean up on component unmount
    window.addEventListener("unload", handlePageUnload);

    return () => {
      window.removeEventListener("unload", handlePageUnload);
    };
  }, []);

  // Function to handle the buy button click
  const handleBuyButtonClick = (selectedProduct: IProduct) => {
    // Retrieve the existing list of orders from local storage
    const existingOrdersJSON = localStorage.getItem("selectedProducts");
    const existingOrders: IProduct[] = existingOrdersJSON
      ? JSON.parse(existingOrdersJSON)
      : [];
    console.log(existingOrders);

    // Check if the selected product already exists in the orders
    const isProductInOrders = existingOrders.some(
      (product) => product.product_Name === selectedProduct.product_Image
    );

    // If the product is not already in orders, add it
    if (!isProductInOrders) {
      const updatedOrders: IProduct[] = [...existingOrders, selectedProduct];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedOrders));
    }

    // Navigate to the order summary page
    navigate("/products/order", { state: { selectedProduct } });

    toast.success("Order Submitted Successfully");
  };

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box>
        {selectedProduct && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexDirection: "column",
            }}
          >
            <Box>
              <img
                src={selectedProduct.product_Image}
                alt={selectedProduct.product_Name}
                width={300}
              />
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "30px", fontWeight: "bolder" }}
              >
                {selectedProduct.product_Name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "25px", backgroundColor: "ButtonFace" }}
              >
                {selectedProduct.product_Description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ marginRight: 1 }} variant="h6">
                  Price:&nbsp;₹
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "ThreeDLightShadow",
                    paddingY: 2,
                  }}
                >
                  {selectedProduct.product_Price}
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#189e35",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#189e35",
                      fontWeight: "bold",
                    },
                  }}
                  onClick={() => handleBuyButtonClick(selectedProduct)}
                >
                  Buy now
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProductDetails;
