import { Typography } from "@mui/material";

import GoogleMap from '../../components/Map/GoogleMap';
import Footer from "../../components/Footer";
import './Contact.css';


export default function Contact() {


    const location = {
        address: 'Acul Fermecat',
        lat: 44.4299641,
        lng: 26.1054737,
      }

    return (
        <> 
            <Typography variant='h3' className="contacttitle">Contact</Typography>
            <div className="mapdiv">
                <GoogleMap location={location} zoomLevel={19}></GoogleMap>
                </div>
        <Footer/>
        </>
    )
}