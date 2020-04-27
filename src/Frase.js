import React from 'react';
import './Frase.css';

class Frase extends React.Component{
    render(){
        return <div classname = "container">
                <div className = "parte1">
                <div className = "este">ES</div>
                <div className = "TRABAJO">TRA</div>
                <div className = "sacara">SAC</div>
                <div className = "UN">U</div>
                <div className = "cinco">CIN</div>
            </div>
            <div className = "parte2">
                <div className = "este">TE</div>
                <div className = "TRABAJO">BAJO</div>
                <div className = "sacara">ARA</div>
                <div className = "UN">N</div>
                <div className = "cinco">CO</div>    
            </div>
        </div>
    }
}

export default Frase;