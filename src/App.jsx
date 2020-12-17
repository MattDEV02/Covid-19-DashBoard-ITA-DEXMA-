import React from 'react';
import axios from 'axios';
import Navbar from './components/components/navbar';
import Loading from './components/loading';
import Body from './components/body';
import endPoint from './js/utils';
import './css/index.css';


let covid19 = null;
class App extends React.Component {
   constructor() {
      super();
      this.state = { covid19: covid19, reqERR: false };
   }
   componentDidMount() {
      axios.get(endPoint)
         .then(response => covid19 = response.data)
         .catch(error => this.handleError(error))
         .then(() => this.getCovid19(covid19));
   }
   render() {
      return (
         <React.StrictMode>
            <Navbar />
            <div className='container-fluid'>
               <div className='row justify-content-center'>
                  {
                     this.state.covid19 ? <Body covid19={this.state.covid19} /> : <Loading reqERR={this.state.reqERR} />
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
   handleError(error) {
      const getErr = { reqERR: true };
      this.setState(getErr);
      console.error(error);
   }
}

export default App;