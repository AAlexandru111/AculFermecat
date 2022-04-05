import { Grid } from "@mui/material";
import { Product } from "../features/models/products";
import { useAppSelector } from "../features/store/configureStore";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../pages/products/ProductCardSkeleton";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    const { productsLoaded } = useAppSelector(state => state.catalog);
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    {!productsLoaded ? (
                        <ProductCardSkeleton />
                    ) : (
                        <ProductCard product={product} />
                    )}
                </Grid>
            ))}
        </Grid>
    )
}