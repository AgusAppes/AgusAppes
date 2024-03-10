import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BClose from "../images/BClose.png";
import Ex from "../images/excel.png";
import Vlopez from "../images/frontvlopez.png";
import IntProg from "../images/intprog.png";
import Marketing from "../images/Marketing.png";

const ModalCert = ({ show, close, title }) => {
    const modalClasses = show ? "modal" : "modal hide";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        show && (
        <div className="modal-container" onClick={close}>
            <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <h2 className="modal-header-title">{title}</h2>
                    <button className="close" onClick={close}>
                    <img className="BClose" src={BClose} alt="close" />
                    </button>
                </header>
                <main className="modal-content">
                    <h1>CERTIFICACIONES</h1>
                    <Slider {...settings}>
                            <div id="project">
                                <img id="certi" src={Ex} alt="Excel" />
                            </div>
                            <div id="project">
                                <img id="certi" src={Vlopez} alt="Frontend" />
                            </div>
                            <div id="project">
                                <img id="certi" src={IntProg} alt="IntProg" />
                            </div>
                            <div id="project">
                                <img id="certi" src={Marketing} alt="Marketing" />
                            </div>
                    </Slider>
                    <div className="modal-background">
                    </div>
                </main>
                
            </div>
        </div>
        )
    );
};

export default ModalCert;