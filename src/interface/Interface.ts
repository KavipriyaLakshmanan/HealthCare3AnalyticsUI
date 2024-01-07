import { Location } from "react-router-dom";

export interface LoginFormState {
    username: string;
    password: string;
}

export interface IProduct {
    product_Name: string,
    product_Description: string,
    product_Image: string,
    product_Price: number
}

export interface ProductCardProps {
    item: IProduct;
    navigateToProductDetails: (item: IProduct) => void;
}

export interface NavbarProps {
    navigate: (to: string) => void;
    location: Location;
}

