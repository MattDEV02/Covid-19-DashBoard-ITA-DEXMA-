import React from 'react';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import requests, {
   isValidData,
   ErrMsg
} from './js/index';
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
      const handleError = this.handleError;
      Promise.all(requests) // 2 Async HTTP GET requests In Concurrency...
         .then(responses => {
            console.log(responses);
            covid19 = responses[0].data;
            regioni = responses[1].data;
         })
         .catch(error => handleError(error))
         .then(() => {
            const condition = (isValidData(covid19, regioni));
            if (condition) {
               this.getCovid19(covid19);
               this.getRegioni(regioni);
            } else {
               const error = new Error(ErrMsg);
               handleError(error);
            }
         });
   }
   render() {
      const state = this.state;
      const
         covid19 = state.covid19,
         regioni = state.regioni,
         reqERR = state.reqERR;
      return (
         <React.StrictMode>
            <Navbar />
            <div className='container-fluid'>
               <div className='row justify-content-center'>
                  {
                     (covid19 && regioni) ?  /* Check if the Data is Ready */
                        <Body
                           covid19={covid19}
                           regioni={regioni}
                        /> :
                        <Loading reqERR={reqERR} /> /*This will Display this Message: "The Output is Loading..."  */
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
      const ErrMsg = error.message;
      console.error(ErrMsg);
      throw error; // Stop the Execution.
   }
}

export default App;