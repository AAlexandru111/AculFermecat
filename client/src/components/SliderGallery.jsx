import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import acul1 from '../pictures/acul1.jpg';
import acul2 from '../pictures/acul2.jpg';
import acul3 from '../pictures/acul3.jpg';
import acul4 from '../pictures/acul4.jpg';
import acul5 from '../pictures/acul5.jpg';
import '../components/SliderGallery.css';

const items = [
    <div className="item" data-value="1"><p>
    S.C. ACCENT DESIGN S.R.L. a fost înfiinţată din 1994 şi a pornit activitatea cu doi angajaţi într-un spaţiu dotat cu utilaje pentru confecţii, închiriat de la un proprietar care a încercat anterior să se lanseze în aceasta afacere, dar nu a reuşit.
    </p><img src={acul1} className="sliderimg"></img></div>,
    <div className="item" data-value="2"><p>
    S.C. ACCENT DESIGN S.R.L. a fost înfiinţată din 1994 şi a pornit activitatea cu doi angajaţi într-un spaţiu dotat cu utilaje pentru confecţii, închiriat de la un proprietar care a încercat anterior să se lanseze în aceasta afacere, dar nu a reuşit.
    </p><img src={acul2} className="sliderimg"></img></div>,
    <div className="item" data-value="3"><p>
    S.C. ACCENT DESIGN S.R.L. a fost înfiinţată din 1994 şi a pornit activitatea cu doi angajaţi într-un spaţiu dotat cu utilaje pentru confecţii, închiriat de la un proprietar care a încercat anterior să se lanseze în aceasta afacere, dar nu a reuşit.
    </p><img src={acul3} className="sliderimg"></img></div>,
    <div className="item" data-value="4"><p>
    S.C. ACCENT DESIGN S.R.L. a fost înfiinţată din 1994 şi a pornit activitatea cu doi angajaţi într-un spaţiu dotat cu utilaje pentru confecţii, închiriat de la un proprietar care a încercat anterior să se lanseze în aceasta afacere, dar nu a reuşit.
    </p><img src={acul4} className="sliderimg"></img></div>,
    <div className="item" data-value="5"><p>
    S.C. ACCENT DESIGN S.R.L. a fost înfiinţată din 1994 şi a pornit activitatea cu doi angajaţi într-un spaţiu dotat cu utilaje pentru confecţii, închiriat de la un proprietar care a încercat anterior să se lanseze în aceasta afacere, dar nu a reuşit.
    </p><img src={acul5} className="sliderimg"></img></div>,
];

const Carousel = () => (
    <AliceCarousel
        autoWidth
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default Carousel;