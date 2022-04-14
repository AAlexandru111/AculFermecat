
import './Homepage.css';
import cover from '../pictures/aculfermecat.jpg';
import Footer from "../components/Footer";




export default function Homepage() {

    return (
        <>
        
            <div className="coverdiv">
                <img src={cover} className="cover"></img>
                <div className="blackcover"></div>
                <div data-aos="fade-right"><a href="/products" className="buttontoproducts">Acceseaza Produsele</a></div>
                
            </div>
            <Footer/>
            
        </>
    )
}