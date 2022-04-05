import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { Product } from "../features/models/products";
import ProductCard from "../components/ProductCard";
import '../components/ProductList.css'


interface Props {
    products: Product[];
}

export default function ProductList({products}: Props){
    return(
        <Grid container spacing={4}>
        {products.map(product =>(
            <Grid item xs={3} key={product.id}>
                <ProductCard product={product}></ProductCard>
                </Grid>
        ))}
        </Grid>
    )
}