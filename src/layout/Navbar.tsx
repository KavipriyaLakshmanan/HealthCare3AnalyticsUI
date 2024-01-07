import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import navBarLogo from "../assets/navBarLogo.jpg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { NavbarProps } from "../interface/Interface";
import axios from "axios";
import toast from "react-hot-toast";

const withNavigate =
  (WrappedComponent: React.ComponentType<NavbarProps>) =>
  (props: NavbarProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <WrappedComponent {...props} navigate={navigate} location={location} />
    );
  };

class Navbar extends React.Component<NavbarProps> {
  state = {
    cartItems: [],
    cartCount: 0,
    isMobile: window.innerWidth < 960,
  };

  componentDidMount() {
    // ... (same as before)
    this.updateCartCount();

    // Event listener to update isMobile state on window resize
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.handleResize);
  }
  updateCartCount() {
    const cartItemsString = localStorage.getItem("cartItems");

    if (cartItemsString) {
      const cartItems = JSON.parse(cartItemsString);

      this.setState({
        cartCount: cartItems.length,
      });
    }
  }
  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth < 960,
    });
  };

  // Function to handle user logout
  handleLogout = async () => {
    try {
      console.log("logout");

      // Send a POST request to the logout endpoint
      const response = await axios.post("http://localhost:3000/logout", null, {
        withCredentials: true, // Include cookies in the request
      });

      const data = response.data;
      console.log(data);

      if (data.success) {
        toast.success("Logged out successfully");
        this.props.navigate("/login"); // Redirect to the home page after logout
      } else {
        console.error("Logout failed. Server response:", data);
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred. Please try again.");
    }
  };

  render() {
    const { location } = this.props;

    return (
      <AppBar position="fixed" sx={{ backgroundColor: "#4caf50" }}>
        <Toolbar>
          <Box sx={{ marginRight: 2 }}>
            <img
              src={navBarLogo}
              alt="Logo"
              style={{ height: 40, borderRadius: "100%" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            HEALTH CARE
          </Typography>
          {(location.pathname == "/products" ||
            location.pathname == "/products/productDetails" ||
            location.pathname == "/products/order" ||
            location.pathname == "/products/addToCartItemList" ||
            location.pathname == "/products/orderSummary") && (
            <>
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <Link to="products/addToCartItemList">
                    <AddShoppingCartIcon sx={{ color: "white" }} />
                  </Link>
                </IconButton>
                <Button
                  variant="text"
                  onClick={this.handleLogout}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Logout
                </Button>
              </Box>

              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              ></Link>
            </>
          )}

          {location.pathname === "/" && (
            <Button
              variant="text"
              sx={{ color: "white", fontWeight: "bold" }}
              onClick={() => this.props.navigate("/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withNavigate(Navbar);
