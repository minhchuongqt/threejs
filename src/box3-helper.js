
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
  MeshDepthMaterial
} from "three"; // import necessary components

import * as THREE from "three";


const threejsContainer = document.getElementById("threejs"); // get container
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




var box = new THREE.Box3();
box.setFromCenterAndSize( new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( 1, 1, 1 ) );

var helper = new THREE.Box3Helper( box, 0xffff00 );
// scene.add( box );
scene.add( helper );


camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);

  // helper.rotation.x += 0.01;
  // helper.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();