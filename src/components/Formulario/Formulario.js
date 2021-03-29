import React, { useState } from 'react';

import LogoBW from '../../assets/images/logo-bw-completed.png';
import LogoBWW from '../../assets/images/logo-resplandor.png';

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
    }

    return (

        <div className="Form-Page-Container">

            <div className="logo-bw-container">
              <img src={LogoBWW} />
            </div>
        
            <div className="form-container-dad">

                { error ? <p className=''>Completa los datos</p> : null }

                <form
                    onSubmit={onSubmit}
                    className="formulario"
                >
           
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
