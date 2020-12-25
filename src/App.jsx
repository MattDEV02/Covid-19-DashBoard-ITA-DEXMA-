import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import endPoint, { urlRegioni, isValidData, errorMsg } from './js/utils';
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
                     (covid19State && regioniState) ?  /* Check if the Output is Ready */
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
      try {
         if (!isValidData(covid19)) throw new Error(errorMsg);
         const __covid19__ = { covid19: covid19 };
         this.setState(__covid19__);
      } catch (error) {
         console.error(error.message);
      } finally {
         console.log(covid19);
      }
   }
   getRegioni(regioni) {
      try {
         if (!isValidData(regioni)) throw new Error(errorMsg);
         const __regioni__ = { regioni: regioni };
         this.setState(__regioni__);
      } catch (error) {
         console.error(error.message);
      } finally {
         console.log(regioni);
      }
   }
   handleError(error) {
      console.error(error);
      const getErr = { reqERR: true };
      this.setState(getErr);
   }
}

export default App;