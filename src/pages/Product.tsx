import { Component } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { ProductNavigationControl } from "./ProductNavigationControl";
import { IProduct } from "../interface/Interface";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

// Class component for displaying a list of products and handling product data
class Product extends Component {
  state = {
    productData: [],
    loading: true,
  };

  // Lifecycle method: Invoked immediately after the component is inserted into the DOM
  async componentDidMount() {
    try {
      const response = await axios.get<IProduct[]>(
        "https://x8ki-letl-twmt.n7.xano.io/api:Lfpm_yav/med_prod"
      );

      this.setState({ productData: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  render() {
    const { productData, loading } = this.state;

    return (
      <>
        {loading ? (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Container>
        ) : (
          <Container sx={{ marginTop: "100px" }}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center", padding: 3 }}
              >
                PRODUCTS
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {productData.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ProductNavigationControl item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </>
    );
  }
}

export default Product;
