import { useNavigate } from "react-router";
import { IProduct } from "../interface/Interface";
import ProductCard from "./ProductCard";

// Functional component that acts as a navigation control for individual product cards
export const ProductNavigationControl: React.FC<{ item: IProduct }> = ({
  item,
}) => {
  const navigate = useNavigate();

  // Function to handle card click, triggering navigation to the product details page
  const handleCardClick = () => {
    navigate("/products/productDetails", { state: { item } });
  };

  // Rendering the ProductCard component with the specified item and click handler
  return <ProductCard item={item} handleCardClick={handleCardClick} />;
};
