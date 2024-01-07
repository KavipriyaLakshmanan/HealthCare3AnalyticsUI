import "./App.css";
import LoginForm from "./pages/LoginForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";
import Order from "./pages/Order";
import WelcomPage from "./pages/WelcomPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddToCart from "./pages/AddToCart";
import PrivateRoute from "./pages/PrivateRoute";

export const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />

        <Router>
          <Layout />
          <Routes>
            {/* <Route path="/login" element={<LoginForm />} />{" "} */}
            <Route path="/" index element={<WelcomPage />} />
            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <LoginForm />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/products/productDetails"
              element={
                <PrivateRoute>
                  <ProductDetails />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/products/order"
              element={
                <PrivateRoute>
                  <Order />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/products/addToCartItemList"
              element={
                <PrivateRoute>
                  <AddToCart />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
