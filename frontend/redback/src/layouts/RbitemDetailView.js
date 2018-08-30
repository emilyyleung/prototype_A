import React from 'react';
import axios from 'axios';
// import Rbitems from '../components/Rbitems';
import { Card, Row, Col } from 'antd';

import ReactJson from 'react-json-view';
import Viewport from '../components/Viewport';

class RbitemDetail extends React.Component {

  state = {
    rbitem: {},
    json: {}
  }

  componentDidMount() {
    const rbitemID = this.props.match.params.rbitemID;
    console.log(rbitemID)
    axios.get(`http://127.0.0.1:8000/api/${rbitemID}`)
      .then(res => {
        this.setState({
          rbitem: res.data,
          json: JSON.parse(res.data.archiJson)
        });
        console.log(res.data);
      })
  }

  handleSubmit = (e, requestType, rbitemID) => {
    const ID = this.props.match.params.rbitemID;
    const name = this.state.rbitem.name;
    const description = this.state.rbitem.description;

    console.log(name)
    // const new_data = e.updated_src;
    console.log(JSON.stringify(e.updated_src))
    // console.log(ID)

    const data = {
      id: ID,
      name: name,
      description: description,
      archiJson: JSON.stringify(e.updated_src)
    }

    function updateRbitem(data) {
      const url = `http://127.0.0.1:8000/api/${Number(ID)}/`;
      return axios.put(url, data)
      .then(res => console.log(res))
      .catch(error => console.error(error))
    }

    updateRbitem(data);

    // axios.put(`http://127.0.0.1:8000/api/${Number(ID)}/`, {
    //   archiJson: JSON.stringify(e.updated_src)
    // })
    // .then(res => console.log(res))
    // .catch(error => console.error(error))

    // switch ( requestType ) {
    //   case 'post':
    //     axios.post('http://127.0.0.1:8000/api/', {
    //       archiJson: archiJson
    //     })
    //     .then(res => console.log(res))
    //     .catch(err => console.err(err))
    //   case 'put':
    //     axios.post(`http://127.0.0.1:8000/api/${rbitemID}/`, {
    //       archiJson: archiJson
    //     })
    //     .then(res => console.log(res))
    //     .catch(err => console.err(err))
    // }
  }

  render() {
    return (
      <Card title={this.state.rbitem.name}>
        <Row>
          <Col span={24}>
            <p>{this.state.rbitem.description}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Viewport />
          </Col>
          <Col span={12}>
            <p><b>JSON Tree</b></p>
            <ReactJson
              name={this.state.rbitem.name}
              src={this.state.json}
              onAdd={this.handleSubmit.bind(this)}
              onEdit={this.handleSubmit.bind(this)}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default RbitemDetail;
