import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box, Container, Grid } from "@mui/material";
import './Homepage.css';
import cover from '../pictures/cover.jpg';
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "../features/models/products";

interface Props {
    products: Product[];
}

export default function Homepage() {
    return (
        <>
        
            <div className="coverdiv">
                <img src={cover} className="cover"></img>
                <div className="blackcover"></div>
            </div>
            <Grid container spacing={4}>
                {products.map(product =>(
            <Grid item xs={3} key={product.id}>
                <ProductCard product={product}></ProductCard>
                </Grid>
        ))}
        </Grid>
            <Footer/>
            
        </>
    )
}