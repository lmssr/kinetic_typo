import shaders from './gl/shaders';
import f from './fonts';

const options = [
  {
    word: '281 AGENCY',
    color: '#fff',
    fill: '#e2eafc',
    geometry: new THREE.PlaneGeometry(40, 27, 64, 64),
    position: {
      texture: [-0.9, -0.65, 0],
      mesh: [0, 0, 0]
    },
    scale: [0.007, 0.05, 1.5],
    shaders: {
      vertex: shaders.vertex.demo4,
      fragment: shaders.fragment.demo4
    },
    font: {
      file: f.file.demo4,
      atlas: f.atlas.demo4
    },
    class: 'demo-4'
  }
];

export default options;
