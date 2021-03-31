import React from 'react';

import './Buttons.css';

export default function ButtonInfo({guardarVerInfo, guardarVerLyrics}) {

    const passInfo = () => {
        guardarVerInfo(true)
        guardarVerLyrics(false)
    }

    return (
        <div className="but-gr">
            <button
                className="showinfo"
                type='submit'
                onClick={passInfo}
            >
                Groupie
            </button>
        </div>
    )
}
