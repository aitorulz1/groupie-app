import React from 'react';

import './Lyrics.css';


export default function Lyrics({lyrics}) {

    if(lyrics.length === 0) return null;
    
    return (
        <div>
            {lyrics}
        </div>
    )
}
