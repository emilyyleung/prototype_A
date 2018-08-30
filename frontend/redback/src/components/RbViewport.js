import React from 'react';
import { Row, Col } from 'antd';
import Viewport from './Viewport';

var cube = {
  images: [],
  geometries: [
    {
      uuid: "9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4",
      materials: [
        {
          colorSpecular: [0.5, 0.5, 0.5],
          depthWrite: true,
          depthTest: true,
          DbgColor: 15658734,
          colorDiffuse: [0.64, 0.64, 0.64],
          wireframe: true,
          doubleSided: true,
          transparent: false,
          shading: "phong",
          DbgIndex: 0,
          specularCoef: 50,
          DbgName: "Material",
          visible: true,
          blending: 1,
          colorEmissive: [0, 0, 0],
          opacity: 1
        }
      ],
      type: "Geometry",
      name: "CubeGeometry",
      data: {
        faces: [
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          4,
          7,
          6,
          5,
          0,
          3,
          0,
          4,
          5,
          1,
          0,
          3,
          1,
          5,
          6,
          2,
          0,
          3,
          2,
          6,
          7,
          3,
          0,
          3,
          4,
          0,
          3,
          7,
          0
        ],
        vertices: [
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          -1,
          1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          1,
          1,
          1,
          -1,
          1
        ],
        uvs: []
      }
    }
  ],
  textures: [],
  metadata: {
    type: "Object",
    generator: "io_three",
    version: 4.4
  },
  animations: [
    {
      fps: 24,
      tracks: [],
      name: "default"
    }
  ],
  materials: [
    {
      depthWrite: true,
      depthTest: true,
      name: "Material",
      vertexColors: 0,
      shininess: 50,
      uuid: "5743D346-BD6D-4E2D-8C26-469C47E83BF2",
      type: "MeshPhongMaterial",
      color: 10724259,
      emissive: 0,
      specular: 8355711,
      blending: 1
    }
  ],
  object: {
    uuid: "50DE8152-D1B8-4F08-9B18-8948279A4855",
    type: "Scene",
    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    children: [
      {
        name: "Cube",
        uuid: "F3EE9758-7E5E-4FFF-B3F8-B0F9E3220C9D",
        matrix: [-1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        visible: true,
        type: "Mesh",
        material: "5743D346-BD6D-4E2D-8C26-469C47E83BF2",
        castShadow: true,
        receiveShadow: true,
        geometry: "9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4"
      }
    ]
  }
};

class RbViewport extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rb_item: cube
    }
  }

  render() {
    const { rb_item } = this.state;
    return (
      <div>
        <b>Viewport</b>
          <Row>
            <Col span={24} style={{ paddingTop:"20px", paddingRight:"20px", paddingBottom:"5px" }}>
              <Viewport width={750} height={500} rb_item={rb_item}/>
            </Col>
          </Row>
      </div>
    )
  }
}

export default RbViewport;
