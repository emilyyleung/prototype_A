import React from 'react';
import axios from 'axios';
// import Rbitems from '../components/Rbitems';
import { Card, Row, Col } from 'antd';

import ReactJson from 'react-json-view';
import RbViewport from '../components/RbViewport';

class RbitemDetail extends React.Component {

  state = {
    rbitem: {},
    json: {},
    displayGeom: {}
  }

  componentWillMount() {
    const rbitemID = this.props.match.params.rbitemID;
    // console.log(rbitemID)
    axios.get(`http://127.0.0.1:8000/api/${rbitemID}`)
      .then(res => {
        this.setState({
          rbitem: res.data,
          json: JSON.parse(res.data.archiJson),
          displayGeom: JSON.parse(res.data.displayGeom)
        });
        // console.log(res.data.displayGeom);
      })
  }

  handleSubmit = (e, requestType, rbitemID) => {
    const ID = this.props.match.params.rbitemID;
    const name = this.state.rbitem.name;
    const description = this.state.rbitem.description;
    const displayGeom = this.state.rbitem.displayGeom;

    const data = {
      id: ID,
      name: name,
      description: description,
      archiJson: JSON.stringify(e.updated_src),
      displayGeom: displayGeom
    }

    function updateRbitem(data) {
      const url = `http://127.0.0.1:8000/api/${Number(ID)}/`;
      return axios.put(url, data)
      .then(res => console.log(res))
      .catch(error => console.error(error))
    }

    updateRbitem(data);
  }

  render() {
    console.log(this.state.rbitem)
    return (
      <Card title={this.state.rbitem.name}>
        <Row>
          <Col span={24}>
            <p>{this.state.rbitem.description}</p>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <RbViewport data={this.state.rbitem.displayGeom}/>
          </Col>
          <Col span={6}>
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
