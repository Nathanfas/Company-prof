import React from 'react';
import './products.css';
import lenovoLogo from '../../assets/image/Brands/Lenovo.png';
import kangaroLogo from '../../assets/image/Brands/Kangaroo.jpg';
import doubleALogo from '../../assets/image/Brands/Double_A.png';
import lexiLogo from '../../assets/image/Brands/lexi.png';
import canonLogo from '../../assets/image/Brands/Canon_logo_vector.png';
import ciscoLogo from '../../assets/image/Brands/CIsco.png';
import oracleLogo from '../../assets/image/Brands/Oracle-Logo.jpg';
import sinarlineLogo from '../../assets/image/Brands/Sinarline.jpg';
import kyoceraLogo from '../../assets/image/Brands/kyocera.png';
import brotherLogo from '../../assets/image/Brands/Brother-Logo.png';
import unileverLogo from '../../assets/image/Brands/unilever.svg';
import bicLogo from '../../assets/image/Brands/Bic-Logo.png';
import radicalLogo from '../../assets/image/Brands/Radical.jpg';
import hpLogo from '../../assets/image/Brands/HP-Logo-2012.png';
import premiumLogo from '../../assets/image/Brands/Dell-Logo.png';
import casioLogo from '../../assets/image/Brands/casio.png';

const Products = () => {
    const products = [
        doubleALogo, sinarlineLogo, lexiLogo, bicLogo,
        radicalLogo, casioLogo, kangaroLogo, unileverLogo,
        lenovoLogo, premiumLogo, ciscoLogo, oracleLogo,
        brotherLogo, kyoceraLogo , canonLogo, hpLogo
    ];

    return (
        <div className="partners-section" id='products'>
        <h2 className="partners-heading">Products We Provide</h2>
        <div className="partners-grid">
            {products.map((partner, index) => (
                <div className="partner-card" key={index}>
                    <img src={partner} alt={`Partner Logo ${index}`} className="partner-logo" />
                </div>
            ))}
        </div>
    </div>
    );
}

export default Products;
