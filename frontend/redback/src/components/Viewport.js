import React from 'react';
import { Row, Col } from 'antd';

class Viewport extends React.Component {
  render() {

    return (
      <div>
        <b>Viewport</b>
          <Row>
            <Col span={24} style={{ paddingTop:"20px", paddingRight:"20px", paddingBottom:"5px" }}>
              <div id="container" style={{ height:"500px", backgroundColor:"black"}}>
              </div>
            </Col>
          </Row>
      </div>
    )
  }
}

export default Viewport;
