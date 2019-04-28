import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Clima from './Clima';
import Error from './Error';
class App extends Component {
  state={
    error:false,
    consulta:{},
    resultado: {}
  }

  consultarApi=()=>{
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais)return null;

    //leer el url y consultar el API key
    const appId = '379cf6a0d696a58657afb74c7ef040a8';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`
 
    //query con fetch api
    fetch(url)
              .then(respuesta=>{
                return respuesta.json();
              })
              .then(datos=>{
                this.setState({
                  resultado:datos
                })
              })
              .catch(error=>{
                console.log(error);
              })
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.consulta !== this.state.consulta) this.consultarApi();
  }

  datosConsulta = respuesta=>{
    if(respuesta.pais === '' || respuesta.ciudad===''){
      this.setState({
        error:true
      })
    }else{
      this.setState({
        error:false,
        consulta:respuesta
      });
    }
  }

  render(){
    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje='Ambos campos son Obligatorios'/>
    }else{
      resultado = <Clima resultado={this.state.resultado} />
    }
    return (
      <div className="App">
        <Header
          titulo='Clima React'
        />
        <Formulario
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;