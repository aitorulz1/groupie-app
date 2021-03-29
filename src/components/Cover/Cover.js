import React from 'react';

import './Cover.css';

import LogoTitle from '../../assets/images/groupies-logo.png';
import LogoImage from '../../assets/images/lips-logo.png';
import Go from '../../assets/images/go.png';

export default function Cover({guardarCover}) {

        const gotoForm = () => {
            guardarCover(false)
        }

    return (
        <div className="cover-container">
            <div className="cover-content">

                <div className="lips-container">
                    <img src={LogoImage} />
                </div>   

                <div className="welcome">
                    Welcome to
                </div>

                <div className="groupies-container">
                    <img src={LogoTitle} />
                </div>

                <div className="whatis">
                    Groupies is a small app where you can add your favourites artists and the songs you like the most and you will get back the lyrics and some interesting info about its records, biography and so much more!
                    <br /><br />
                    Invite your friends at home, get some drinks and sing like hell! If you do not know the lyrics do not worry!! We will give it to you so you will look as its biggest GROUPIE!
                </div>

                <div className="go">
                    <img src={Go} />
                </div>

                <label class="label">                  

                    <div class="toggle">
                    
                        <input 
                            class="toggle-state" 
                            type="checkbox" 
                            name="check" 
                            value="check" 
                            onClick={gotoForm}
                            /*onClick={setTimeout(gotoForm, 3000)}*/
                        />
                        
                        <div class="indicator"></div>
                    </div>
                    
                </label>
             
            
            </div>
        </div>
    )
}
