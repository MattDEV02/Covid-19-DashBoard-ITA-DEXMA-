import React from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Loading from './components/loading';
import TableData from './components/tableData';
import endPoint from './js/utils';
import './css/index.css';


let data;
class App extends React.Component {
   constructor() {
      super();
      this.state = { data: null };
   }
   componentDidMount() {
      axios.get(endPoint)
         .then(response => data = response.data)
         .catch(error => console.error(error))
         .then(() => this.getData(data));
   }
   render() {
      return (
         <React.StrictMode>
            <Navbar />
            <div className='container-fluid'>
               <div className='row justify-content-center'>
                  {
                     this.state.data ? <TableData data={this.state.data} /> : <Loading />
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   getData(data) {
      const _data = { data: data };
      this.setState(_data);
   }
}

export default App;