import React, { useState } from 'react';

import LogoImage from '../../assets/images/lips-logo.png';

import './Formulario.css';

         
         export default function Formulario({guardarBusquedaObjeto}) {

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

        guardarBusquedaObjeto(busqueda);
    }

    return (
        <div className="form-container">

                { error ? <p className=''>Completa los datos</p> : null }

                <form
                    onSubmit={onSubmit}
                >


                    <input
                        type='text'
                        placeholder='artist'
                        className='artist'
                        name='artist'
                        onChange={onChange}
                    />
                    
                    <input
                        type='text'
                        placeholder='song'
                        className='song'
                        name='song'
                        onChange={onChange}
                    />

                    <input
                        type='submit'
                        className='send'
                        value='find'
                    />

                </form>
            
        </div>
    )
}
