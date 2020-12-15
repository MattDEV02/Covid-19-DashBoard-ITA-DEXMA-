import React from 'react';


class Loading extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const reqERR = this.props.reqERR;
      return (
         <div className='col-12 mt-5'>
            <div className='row justify-content-center'>
               {
                  reqERR ?
                     <React.StrictMode>
                        <div id='err'>
                           <h1>Richiesta al Server fallita , Risposta non Ricevuta.</h1>
                           <br />
                           <h1>Per maggiori Informazioni visualizzare il messaggio di Errore nella Console.</h1>
                        </div>
                     </React.StrictMode> :
                     <h1>The Output is Loading...</h1>
               }
            </div>
         </div>
      );
   }
}

export default Loading;