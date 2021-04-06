import React, {useState, useEffect} from 'react';

import Logo from './assets/images/logo-bw-completed.png'

import Formulario from './components/Formulario/Formulario';
import Lyrics from './components/Lyrics/Lyrics';
import Info from './components/Info/Info';
import Cover from './components/Cover/Cover';
import Spinner from  './components/Spinner/Spinner';

import ButtonInfo from './components/Buttons/ButtonInfo';
import ButtonLyrics from './components/Buttons/ButtonLyrics';



import axios from 'axios';

import './App.css';

function App() {

  const [ busquedaobjeto , guardarBusquedaObjeto ] = useState({});

  const [ lyrics, guardarLyrics] = useState('');
  const [ informacion, guardarInformacion ] = useState({});

  const [ form, guardarForm ] = useState(false);

  const [ showinfo, guardarShowInfo ] = useState(false);
  const [ showbuttons, guardarShowButtons ] = useState(false);
  const [ loading, guardarLoading ] = useState(false);

  const [ verlyrics, guardarVerLyrics ] = useState(false);
  const [ verinfo, guardarVerInfo ] = useState(false);
  


  
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
                      guardarLoading={guardarLoading}
                      guardarShowButtons={guardarShowButtons}
                    />

                    <div>

                      {showbuttons ?

                          <div className="info-container">

                              { loading ? <Spinner /> :

                                  <div className="info-fontent">

                                     
                                      <label className="title">Now you can check either the lyrics of the song you are looking for or the most valuble info of your favorite group</label>

                                          <div className="buttons-conainer">
                                              
                                              <div className="">
                                                <ButtonLyrics
                                                  guardarVerLyrics={guardarVerLyrics}
                                                  guardarVerInfo={guardarVerInfo}
                                                />
                                              </div>
                                              
                                              <div className="">
                                                <ButtonInfo 
                                                  guardarVerInfo={guardarVerInfo}
                                                  guardarVerLyrics={guardarVerLyrics}
                                                />
                                              </div>

                                          </div>

                                          <div className="result-container">

                                                {verlyrics ? 

                                                  <Lyrics
                                                    lyrics={lyrics}
                                                  /> 
                                                
                                                : null}
                                                
                                                {verinfo ? 

                                                  <Info
                                                    informacion={informacion} 
                                                  />

                                                : null}

                                          </div>
                                   

                                  </div>

                              }

                          </div> : 
                      
                      null}

                    <div className="logo-bw"><img src={Logo} /></div>
                    
                    </div>

                </div>

            : null}
  

        </div>
     
    </div>
  );
}

export default App;
