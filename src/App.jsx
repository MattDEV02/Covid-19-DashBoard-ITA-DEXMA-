import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import endPoint, { urlRegioni, isValidData } from './js/utils';
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
         andamentoRegioni = axios.get(urlRegioni);
      Promise.all([andamentoNazionale, andamentoRegioni]) // 2 Async HTTP GET requests In Concurrency...
         .then(result => {
            console.log(result);
            covid19 = result[0].data;
            regioni = result[1].data;
         })
         .catch(error => this.handleError(error))
         .then(() => {
            if ((isValidData(covid19)) && (isValidData(regioni))) {
               this.getCovid19(covid19);
               this.getRegioni(regioni);
            } 
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
                     (covid19State && regioniState) ?  /* Check if the Data is Ready */
                        <Body
                           covid19={covid19State}
                           regioni={regioniState}
                        /> :
                        <Loading reqERR={reqERRState} /> /*This will Display this Message: "The Output is Loading..."  */
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   getCovid19(covid19) {
      console.log(covid19);
      const __covid19__ = { covid19: covid19 };
      this.setState(__covid19__);
   }
   getRegioni(regioni) {
      console.log(regioni);
      const __regioni__ = { regioni: regioni };
      this.setState(__regioni__);
   }
   handleError(error) {
      console.error(error.message);
      const getErr = { reqERR: true };
      this.setState(getErr);
   }
}

export default App;