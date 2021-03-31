import React from 'react';

import './Buttons.css';

export default function ButtonLyrics({guardarVerLyrics, guardarVerInfo}) {

    const passLyrics = () => {
        guardarVerLyrics(true)
        guardarVerInfo(false)
    }

    return (
        <div className="but-ly">
            <button
                className="showlyrics"
                type='submit'
                onClick={passLyrics}
            >
                Lyrics
            </button>
        </div>
    )
}
