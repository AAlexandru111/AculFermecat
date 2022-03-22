import { Typography } from "@mui/material";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import agent from "../features/api/agent";
import LoadingComponent from "../components/LoadingComponent";
import { Product } from "../features/models/products";
import ProductList from "../components/ProductsList";

export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading products..."></LoadingComponent>


    return (
        <>
        <ProductList products={products}></ProductList>
    </>
    )
}