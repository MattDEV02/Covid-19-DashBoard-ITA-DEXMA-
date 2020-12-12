import React from 'react';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr className='border border-dark'>
                <td>{this.props.data.data}</td>
                <td>{this.props.data.nuovi_positivi}</td>
                <td>{this.props.data.tamponi}</td>
                <td>{this.props.data.deceduti}</td>
                <td>{this.props.data.dimessi_guariti}</td>
            </tr>
        );
    }
}

export default Row;