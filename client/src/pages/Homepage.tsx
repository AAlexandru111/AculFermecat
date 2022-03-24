import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box, Container, Grid } from "@mui/material";
import './Homepage.css';
import cover from '../pictures/cover2.jpg';
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "../features/models/products";
import ProductList from "../components/ProductsList";
import { useState, useEffect } from "react";
import LoadingComponent from "../components/LoadingComponent";
import agent from "../features/api/agent";



export default function Homepage() {


    const [products, setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    const filteredProducts = products.slice(1,5)

    if (loading) return <LoadingComponent message="Loading products..."></LoadingComponent>
    return (
        <>
        
            <div className="coverdiv">
                <img src={cover} className="cover"></img>
                <div className="blackcover"></div>
                <div data-aos="fade-right"><a href="/products" className="buttontoproducts">See Products</a></div>
                
            </div>
            <ProductList products={filteredProducts}></ProductList>
            <Footer/>
            
        </>
    )
}