import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import GoogleMap from '../components/Map/GoogleMap';


export default function Contact() {

    const location = {
        address: 'Acul Fermecat',
        lat: 44.4299641,
        lng: 26.1054737,
      }

    return (
        <> 
        <GoogleMap location={location} zoomLevel={19}></GoogleMap>
        </>
    )
}