import React from 'react';
import * as THREE from 'three';

class Viewport extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rb_item: this.props.rb_item
    }
  };

  componentDidMount() {
    const { width, height } = this.props;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);

    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    var directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1).normalize();
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    this.refs.anchor.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({ color:0xffffff });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const loader = new THREE.ObjectLoader();

    function loadGeo(loader, rb_geometry) {
      var model = loader.parse(rb_geometry);
      var material = new THREE.MeshPhongMaterial({
        color:0x0f0f0f,
        dithering: true
      });
      const mesh = new THREE.Mesh(model.children[0].geometry, material);
      scene.add(mesh);
    }

    loadGeo(loader, this.state.rb_item)

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
