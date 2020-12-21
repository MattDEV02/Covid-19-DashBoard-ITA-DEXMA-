import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import endPoint, { endPointRegioni } from './js/utils';
import './css/index.css';


let
   covid19 = null,
   regioni = null,
   reqERR = false;
class App extends React.Component {
   constructor() {
      super();
      this.state = { covid19: covid19, regioni: regioni, reqERR: reqERR };
   }
   componentDidMount() {
      const
         andamentoNazionale = axios.get(endPoint),
         andamentoRegioni = axios.get(endPointRegioni);
      Promise.all([andamentoNazionale, andamentoRegioni]) // Concurrency
         .then(result => {
            covid19 = result[0].data;
            regioni = result[1].data;
         })
         .catch(error => this.handleError(error))
         .then(() => {
            this.getCovid19(covid19);
            this.getRegioni(regioni);
         });
   }
   render() {
      const
         covid19State = this.state.covid19,
         regioniState = this.state.regioni,
         reqERRState = this.state.reqERR;
      return (
         <React.StrictMode>
            <Navbar />
            <div className='container-fluid'>
               <div className='row justify-content-center'>
                  {
                     (covid19State && regioniState) ?
                        <Body
                           covid19={covid19State}
                           regioni={regioniState}
                        /> :
                        <Loading reqERR={reqERRState} />
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   getCovid19(covid19) {
      console.log(covid19);
      const __covid19 = { covid19: covid19 };
      this.setState(__covid19);
   }
   getRegioni(regioni) {
      console.log(regioni);
      const __regioni = { regioni: regioni };
      this.setState(__regioni);
   }
   handleError(error) {
      console.error(error);
      const getErr = { reqERR: true };
      this.setState(getErr);
   }
}

export default App;