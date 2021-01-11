import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import endPoint, { urlRegioni, isValidData, ErrMsg } from './js/index';
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
	  const requests = [andamentoNazionale, andamentoRegioni];
      Promise.all(requests) // 2 Async HTTP GET requests In Concurrency...
         .then(responses => {
            console.log(responses);
            covid19 = responses[0].data;
            regioni = responses[1].data;
         })
         .catch(error => this.handleError(error))
         .then(() => {
            if ((isValidData(covid19)) && (isValidData(regioni))) {
               this.getCovid19(covid19);
               this.getRegioni(regioni);
            } else {
               const error = new Error(ErrMsg);
               this.handleError(error);
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
      const __covid19__ = { covid19: covid19 };
      this.setState(__covid19__);
   }
   getRegioni(regioni) {
      const __regioni__ = { regioni: regioni };
      this.setState(__regioni__);
   }
   handleError(error) {
      const getErr = { reqERR: true };
      this.setState(getErr);
      throw error; // Stop the Execution.
   }
}

export default App;