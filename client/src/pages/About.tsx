import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import './About.css';
import cover from '../pictures/aculfermecat.jpg';
import Carousel from "../components/SliderGallery";

export default function About() {
    return (
        <>
            <Typography variant='h2' className="abouttitle">About us</Typography>
            <Carousel></Carousel>
            <Footer/>
        </>
    )
}