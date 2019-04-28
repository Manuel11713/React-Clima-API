import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Clima extends Component{
    mostrarResultado = ()=>{
        //Obtener los datos de la consulta
        const {name,weather,main} = this.props.resultado;

        if(!name || !weather || !main)return null;

        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

        
        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 ofset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura"> 
                                Actual: {main.temp}  &deg;C 
                                <img src={urlIcono} alt="Clima" />
                            </p>
                            <p>Minima: {main.temp_min} &deg;C</p>
                            <p>Maxima: {main.temp_max} &deg;C</p>
                        </span>
                    
                    </div>
                 </div>

            </div>
        )
    }
    render(){
        return(
            <div className="container">
                {this.mostrarResultado()}
            </div>
        )
    }
}
Clima.propTypes={
    resultado: PropTypes.object.isRequired
}

export default Clima;