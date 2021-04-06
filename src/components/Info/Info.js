import React from 'react';
import { Link } from 'react-router-dom';

import './Info.css';

import fb from '../../assets/rrss/fb-trans.png';
import twitter from '../../assets/rrss/twitter-trans.png';
import www from '../../assets/rrss/www-trans.png';

export default function Info({informacion}) {

    if(Object.keys(informacion).length === 0) return null;

    const { 
        strArtist, 
        intFormedYear, 
        strArtistBanner, 
        strArtistLogo, 
        strBiographyEN, 
        strGenre, 
        strFacebook, 
        strTwitter, 
        strWebsite} = informacion;

        console.log(strWebsite)

    return (
        <div>
            <div className="logo">
                <img src={strArtistLogo} />
            </div>
            
            <div className="genre">
                {strArtist} | {strGenre} | {intFormedYear}
            </div>

            <div className="bio">
                {strBiographyEN}
            </div>
            
            <div className="social-container">
                <div className="social-content">

                <div className="rrss">
                    <a href={strFacebook} target="_blank"><img src={fb} className="social-img" /></a>
                </div>

                <div className="rrss">
                    <a href={strTwitter} target="_blank"><img src={twitter} className="social-img" /></a>
                </div>

                <div className="rrss">
                    <a href={strWebsite} target="_blank"><img src={www} className="social-img" /></a>
                </div>
            
                </div>
            </div>

            <div className="banner">
                <img src={ strArtistBanner} />
            </div>


        </div>
    )
}
