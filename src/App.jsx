import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
   componentDidMount() {
      let data;
      const url = 'http://127.0.0.1:8080/covid19/backend/';
      axios.get(url)
         .then(response => data = response.data)
         .catch(error => console.error(error))
         .then(() => console.log(data));
   }
   render() {
      return (
         <div>
         </div>
      );
   }
}

export default App;