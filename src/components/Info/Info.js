import React from 'react';

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
        strStyle, 
        strWebsite} = informacion;

    return (
        <div>
            <img src={strArtistLogo} />
        </div>
    )
}
