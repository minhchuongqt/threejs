
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
    BoxHelper
} from "three"; // import necessary components
import { OrbitControls } from './OrbitControls';
import { ConvexBufferGeometry } from './ConvexGeometry';
import * as THREE from "three";
var group, camera, scene, renderer;

scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// camera
camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(15, 20, 30);
scene.add(camera);
// controls
var controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 20;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
scene.add(new THREE.AmbientLight(0x222222));
// light
var light = new THREE.PointLight(0xffffff, 1);
camera.add(light);
// helper
// scene.add(new THREE.AxesHelper(20));
// textures
var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

var cubeA = new THREE.Mesh( geometry, material );
cubeA.position.set( 100, 100, 0 );

var cubeB = new THREE.Mesh( geometry, material );
cubeB.position.set( -100, -100, 0 );

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
var group = new THREE.Group();
group.add( cubeA );
group.add( cubeB );

scene.add( group );

function animate() {
    requestAnimationFrame( animate );
    // group.rotation.y += 0.005;
    render();
}
animate();

function render() {
    renderer.render( scene, camera );
}