import React, {useState, useEffect} from 'react';

import Formulario from './Formulario/Formulario';
import Lyrics from './Lyrics/Lyrics';

import axios from 'axios';

import './App.css';

function App() {

  const [ busquedaobjeto , guardarBusquedaObjeto ] = useState({});

  const [ lyrics, guardarLyrics] = useState('')

  
  useEffect(() => {
    
    if(busquedaobjeto.length === 0) return;
    
    const consultarApiLetras = async() => {
      
      const {artist, song} = busquedaobjeto;

      const url= `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const resultado = await axios(url);
      guardarLyrics(resultado.data.lyrics) 
    }
    consultarApiLetras();
  }, [busquedaobjeto])

  return (
    <div className="Main-Container">

      <Formulario 
         guardarBusquedaObjeto={ guardarBusquedaObjeto }
      />

      <Lyrics
        lyrics={lyrics}
      />

    </div>
  );
}

export default App;
