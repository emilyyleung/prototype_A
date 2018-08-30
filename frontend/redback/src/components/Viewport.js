import React from 'react';
import * as THREE from 'three';

var OrbitControls = require("three-orbit-controls")(THREE);

class Viewport extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rb_item: this.props.rb_item
    }
  };

  componentDidMount() {
    const { width, height } = this.props;
    const { rb_item } = this.state;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(width, height);
    this.refs.anchor.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    var directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1).normalize();
    scene.add(directionalLight);

    const loader = new THREE.ObjectLoader();

    const object = new THREE.Group();

    console.log(this.state.rb_item)

    function loadRedbackJson(loader, rb_geometry, object) {
      var model = loader.parse(rb_geometry);

      function decToRGB(number) {
        var intnumber = number - 0;
        var red, green, blue;
        var template = "#000000";
        red = intnumber&0x0000ff;
        green = intnumber&0x00ff00;
        blue = intnumber&0xff0000;
        intnumber = red|green|blue;
        var HTMLcolor = intnumber.toString(16);
        HTMLcolor = template.substring(0,7 - HTMLcolor.length) + HTMLcolor;

        return HTMLcolor;
      }

      var color = decToRGB(rb_geometry.materials[0].color);

      var material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        side: THREE.DoubleSide,
        clipShadows: true,
        dithering: true
      });

      for( var i = 0; i < model.children.length; i ++) {

        const mesh = new THREE.Mesh(model.children[i].geometry, model.children[i].material)
        mesh.material.side = THREE.DoubleSide;

        object.add(mesh)
        console.log("added mesh")
      }

      return object;
    }
    console.log(this.state.rb_item)
    scene.add(loadRedbackJson(loader, this.state.rb_item, object));
    console.log("hey")
    camera.position.z = 5;

    function gameLoop() {
      requestAnimationFrame(gameLoop);
      renderer.render(scene, camera);
    }

    gameLoop();
  }

  render() {
    const { width, height } = this.props;

    return (
      <div>
        <div ref="anchor" style={{ width, height }} />
      </div>
    )
  }
}

export default Viewport;
