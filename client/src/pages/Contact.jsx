import { Typography } from "@mui/material";

import GoogleMap from '../components/Map/GoogleMap';
import Footer from "../components/Footer";


export default function Contact() {


    const location = {
        address: 'Acul Fermecat',
        lat: 44.4299641,
        lng: 26.1054737,
      }

    return (
        <> 
        <Typography variant='h2'>Contact</Typography>
        <GoogleMap location={location} zoomLevel={19}></GoogleMap>
        <Footer/>
        </>
    )
}