import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Formulario extends Component{
   
    ciudadRef=React.createRef();
    paisRef=React.createRef();
    
    buscarClima= e =>{
        e.preventDefault();
         //leer Refs y objeto
        const info = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        //enviar por props
        this.props.datosConsulta(info);
        //Opcional Recetear el form
        e.currentTarget.reset();
    }
    render(){
        return(
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref={this.ciudadRef}/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select id="pais" ref={this.paisRef}>
                                    <option value=""  defaultValue>Elige un Pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Peru</option>

                                </select>
                                <label htmlFor="pais">Pais:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador ">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
Formulario.propTypes ={
    datosConsulta: PropTypes.func.isRequired
}

export default Formulario;