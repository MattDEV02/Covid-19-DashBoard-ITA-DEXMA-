import React from 'react';


// In fase di Sviluppo...


class Menu extends React.Component {
   constructor(props) {
      super(props);
      this.state = { option: '1' };
   }
   render() {
      return (
         <select onChange={e => this.handleChange(e)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
         </select>
      );
   }
   handleChange(e) {
      const option = e.target.value;
      console.log(option);
      this.setState({ option: option });
      return this.state.option;
   }
}

export default Menu;