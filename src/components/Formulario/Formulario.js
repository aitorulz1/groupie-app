import React, { useState } from 'react';

import './Formulario.css';

         
export default function Formulario({guardarBusquedaObjeto, guardarShowInfo}) {

    const [ busqueda, guardarBusqueda] = useState({
        artist:'',
        song: ''
    })

    const [ error, guardarError ] = useState(false)

    const onChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const { artist, song } = busqueda;

    const onSubmit = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === '') {
            guardarError(true);
        }

        guardarError(false);
        guardarShowInfo(true)
        guardarBusquedaObjeto(busqueda);
        console.log(busqueda)
    }

    return (

        <div className="Form-Page-Container">

            <div className="form-container-dad">

                { error ? <p className=''>Completa los datos</p> : null }

                <form
                    onSubmit={onSubmit}
                    className="formulario"
                >
           
                <label className="title">Choose an Artist</label>
                <div className="form-container">

                    <input
                        type='text'
                        placeholder='artist'
                        className='artist'
                        name='artist'
                        onChange={onChange}
                    />

                </div>
                    
                <div className="form-container">
                <label className="title">Choose one of it songs</label>
                
                    <input
                        type='text'
                        placeholder='song'
                        className='song'
                        name='song'
                        onChange={onChange}
                    />
            
                </div>

                    <input
                        type='submit'
                        className='send'
                        value='find'
                    />

                </form>
           

            </div>

   
        </div>
        
    )
}
