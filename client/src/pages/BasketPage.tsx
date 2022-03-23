import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";
import agent from "../features/api/agent";
import { Basket } from "../features/models/basket";

export default function BasketPage(){
    const[loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.get()
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading basket.."></LoadingComponent>

    if(!basket) return <Typography variant='h3'>Your basket is empty!</Typography>

    return(
        <h1>Buyer Id = {basket.buyerId}</h1>
    )
}