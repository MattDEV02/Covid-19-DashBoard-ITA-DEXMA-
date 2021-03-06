import React from 'react';
import Navbar from './components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import fetchCovid19Data, {
   isValidData,
   initialState,
   ErrMsg
} from './js';
import './css/index.css';


class App extends React.Component {
   constructor() {
      super();
      this.state = initialState;
   }
   async componentDidMount() {
      const responses = await fetchCovid19Data(this);  // 2 Async HTTP GET REQUEST IN CONCURRENCY.
      const
         covid19 = responses[0].data,
         regioni = responses[1].data;
      const condition = (isValidData(covid19, regioni));
      if (condition) {
         this.getCovid19(covid19);
         this.getRegioni(regioni);
      } else {
         const error = new Error(ErrMsg);
         this.handleError(error);
      }
   }
   render() {
      const { covid19, regioni, reqERR } = this.state;
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