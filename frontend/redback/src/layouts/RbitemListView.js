import React from 'react';
import axios from 'axios';
import Rbitems from '../components/Rbitems';

class RbitemList extends React.Component {

  state = {
    rbitems: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          rbitems: res.data
        });
        console.log(res.data)
      })
  }

  render() {
    return (
      <Rbitems data={this.state.rbitems}/>
    )
  }
}

export default RbitemList;
