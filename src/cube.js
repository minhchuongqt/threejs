
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxBufferGeometry,
  MeshPhongMaterial,
  TextureLoader,
  RepeatWrapping,
  Mesh,
  DirectionalLight,
  HemisphereLight,
  Box3Helper,
  BoxGeometry,
  MeshBasicMaterial,
  Geometry,
  LineBasicMaterial,
  Vector3,
  Line,
  MeshDepthMaterial,
  BoxHelper,
  MeshLambertMaterial,
  AmbientLight,
  PointLight,
  Group
} from "three"; // import necessary components

import * as THREE from "three";

import iceTexture from "./textures/ice.jpg"; // ice cube texture image

const threejsContainer = document.getElementById("threejs"); // get container
let scene,
  camera,
  geometry,
  texture,
  material,
  renderer,
  hemiLight,
  dirLight;

  camera = new PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
  camera.position.z = 3; // move camera back 3 units

// create and add everything to the scene
scene = new Scene();
scene.background = new THREE.Color(0x333333);

var group = new Group();
scene.add(group);
// scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);


// setup lights
// hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// hemiLight.position.set(0, 20, 0);
// scene.add(hemiLight);
// dirLight = new THREE.DirectionalLight(0xffffff);
// dirLight.position.set(- 3, 10, - 10);
// dirLight.castShadow = true;
// dirLight.shadow.camera.top = 2;
// dirLight.shadow.camera.bottom = - 2;
// dirLight.shadow.camera.left = - 2;
// dirLight.shadow.camera.right = 2;
// dirLight.shadow.camera.near = 0.1;
// dirLight.shadow.camera.far = 40;
// scene.add(dirLight);




const color = 0xFFFFFF;
const intensity = 1;
// const light = new DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);
scene.add(new AmbientLight(0xffffff));

// var light = new PointLight(0xffffff, 1);
// camera.add(light);

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

material = new MeshLambertMaterial({
  color: 0xffffff,
  opacity: 0.5,
  transparent: true,
  color: 0x2194ce
});  // greenish blue

// material.alphaMap = 1;
// scene.add(line, dirLight, hemiLight);

// setup camera
// camera = new PerspectiveCamera(50, innerWidth / 2 / innerHeight, 1, 1000);
// camera = new PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
// camera.position.z = 3; // move camera back 3 units

material.side = THREE.BackSide;

var cube = new Mesh(geometry, material);
cube.material.side = THREE.BackSide; // back faces
cube.renderOrder = 0;

cube.geometry.computeBoundingBox();

group.add(cube);

var cube = new Mesh(geometry, material.clone());
cube.material.side = THREE.FrontSide; //front faces
cube.renderOrder = 1;
group.add(cube);

let hepler = new BoxHelper(cube, 0xffff00);
scene.add(hepler);



// setup renderer (using WebGL)
renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth / 2, innerHeight);
renderer.gammaOutput = true; // realistic lighting effect

renderer.setAnimationLoop(() => {
  // rotate ice cube
  let speed = 0.01;
  group.rotation.y += 0.005;
  // cube.rotation.x += speed;
  // cube.rotation.y += speed;
  // cube.rotation.z += speed;
  hepler.setFromObject(cube);

  // render
  renderer.render(scene, camera);
});

// add result to container
document.body.appendChild(renderer.domElement);