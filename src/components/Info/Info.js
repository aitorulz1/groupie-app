import React from 'react';

import './Info.css';

export default function Info({informacion}) {

    if(Object.keys(informacion).length === 0) return null;

    const { 
        strArtist, 
        intFormedYear, 

        strArtistBanner, 
        strArtistLogo, 
        
        strBiographyCN, 
        strBiographyDE, 
        strBiographyEN, 
        strBiographyES, 
        strBiographyFR, 
        strBiographyIT, 
        strBiographyJP, 
        
        strGenre, 
        strFacebook, 
        strTwitter, 
        strWebsite} = informacion;

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
            
            <div className="banner">
                <img src={ strArtistBanner} />
            </div>
        </div>
    )
}
