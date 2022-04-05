import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../features/models/products";
import '../components/ProductCard.css';
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../util/util";
import { useAppSelector, useAppDispatch } from "../features/store/configureStore";
import { addBasketItemAsync } from "../pages/basket/basketSlice";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){

  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();
  
    return(
        <Card>
            <CardHeader avatar={
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            } title={product.name}
            titleTypographyProps={{sx: {fontWeight: 'bold', color: 'primary.main'}}}></CardHeader>
        <CardMedia
        sx={{height:140,backgroundSize:'contain', bgcolor: 'primary.light'}}
          component="img"
          image={product.pictureUrl}
          alt="green iguana"
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5" component="div">
            {currencyFormat(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton loading={status.includes('pendingAddItem' + product.id)}
                    onClick={() => dispatch(addBasketItemAsync({productId: product.id}))} size="small">Add to cart</LoadingButton>
          <Button component={Link} to={`/products/${product.id}`} size="small">View</Button>
        </CardActions>
      </Card>
    )
}