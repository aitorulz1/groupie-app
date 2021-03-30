import React, {useState, useEffect} from 'react';

import Formulario from './components/Formulario/Formulario';
import Lyrics from './components/Lyrics/Lyrics';
import Info from './components/Info/Info';
import Cover from './components/Cover/Cover';
import Spinner from  './components/Spinner/Spinner';



import axios from 'axios';

import './App.css';

function App() {

  const [ busquedaobjeto , guardarBusquedaObjeto ] = useState({});

  const [ lyrics, guardarLyrics] = useState('');
  const [ informacion, guardarInformacion ] = useState({});

  const [ form, guardarForm ] = useState(false);

  const [ showinfo, guardarShowInfo ] = useState(false);
  const [ loading, guardarLoading ] = useState(true);


  
  useEffect(() => {
    
    if(Object.keys(busquedaobjeto).length === 0) return;
         
    const consultarApiLetras = async() => {
      
      const {artist, song} = busquedaobjeto;

      const urletra= `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlinfo= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [letra, info ] = await Promise.all([
        axios(urletra),
        axios(urlinfo)
      ]);

      guardarLyrics(letra.data.lyrics)
      guardarInformacion(info.data.artists[0])

  
      console.log(info.data.artists[0])
    }
    consultarApiLetras();
  }, [busquedaobjeto])

  console.log(lyrics)

  return (
    <div className="Main-Container">

        <div className="cover-container">

            <Cover 
              guardarForm={guardarForm}
              form={form}
            /> 

            {form ?

            <div>
            
                <Formulario 
                  guardarBusquedaObjeto={ guardarBusquedaObjeto }
                  guardarShowInfo= {guardarShowInfo}
                />

                { loading ? <Spinner /> : null }

                    <div>

                      <Lyrics
                        lyrics={lyrics}
                      />

                      <Info
                        informacion={informacion}
                      />

                    </div>

            </div>

            : null}

        </div>

        

     
    </div>
  );
}

export default App;
