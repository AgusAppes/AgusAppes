import React from 'react';
import BClose from "../images/BClose.png";

const ModalCV = ({ title, close }) => {
    const closeButtonStyle = {
        position: 'absolute',
        top: '35px',
        right: '194px',
        zIndex: '10',
        background: 'none',
        border: 'none', 
        padding: '0',
        cursor: 'pointer',
      };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '75%', height: '95%', backgroundColor: 'rgba(235, 122, 154, 0.5)', borderRadius: '8px', padding: '10px' }}>
                <button style={closeButtonStyle} onClick={close}>
                    <img style={{width: '20px', height: '20px'}} src={BClose} alt="close" />
                </button>
                <object data={require("../docs/Agustina Fatima Appes CV.pdf")} type="application/pdf" aria-label="Documento PDF" style={{ width: '100%', height: 'calc(100% - 40px)' }}></object>
            </div>
        </div>
    );
}

export default ModalCV;