import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import TableData from './components/tableData';
import endPoint from './js/utils';
import './css/index.css';


let covid19;
class App extends React.Component {
   constructor() {
      super();
      this.state = { covid19: null };
   }
   componentDidMount() {
      axios.get(endPoint)
         .then(response => covid19 = response.data)
         .catch(error => console.error(error))
         .then(() => this.getCovid19(covid19));
   }
   render() {
      return (
         <React.StrictMode>
            <Navbar />
            <div className='container-fluid'>
               <div className='row justify-content-center mt-3'>
                  {
                     this.state.covid19 ? <TableData data={this.state.covid19} /> : <Loading />
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   getCovid19(covid19) {
      const __covid19 = { covid19: covid19 };
      this.setState(__covid19);
   }
}

export default App;