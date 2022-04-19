import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import LoadingComponent from "../../components/LoadingComponent";
import agent from "../../features/api/agent";
import { useAppDispatch } from "../../features/store/configureStore";
import { setBasket } from "../basket/basketSlice";
import CheckoutPage from "./CheckoutPage";


const stripePromise = loadStripe("pk_test_QNFggPUZWSA5TXH8B9GReXPi00EdYmF2Fz")


export default function CheckoutWrapper(){

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[dispatch]);

    if(loading) return <LoadingComponent message="Loading checkout ..."></LoadingComponent>

    return(<Elements stripe={stripePromise}>
        <CheckoutPage/>
    </Elements>)
}