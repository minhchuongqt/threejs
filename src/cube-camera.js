
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
    MeshLambertMaterial
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
var loader = new THREE.TextureLoader();
var texture = loader.load('textures/sprites/disc.png');
group = new THREE.Group();
scene.add(group);


var material = new MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true,
    color: 0x2194ce
  });  // greenish blue


var cubeGeometry = new BoxGeometry(10, 10, 10);
// cubeGeometry.computeBoundingBox();
var cube = new THREE.Mesh(cubeGeometry, material);
cube.material.side = THREE.BackSide; // back faces
cube.renderOrder = 0;

cube.geometry.computeBoundingBox();

group.add(cube);
var cube = new THREE.Mesh(cubeGeometry, material.clone());
cube.material.side = THREE.FrontSide; // front faces
cube.renderOrder = 1;
group.add(cube);

// Create cube camera
var cubeCamera = new THREE.CubeCamera( 1, 100000, 128 );
scene.add( cubeCamera );
// Create car
var chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeCamera.renderTarget.texture } );
var car = new Mesh( cubeGeometry, chromeMaterial );
scene.add( car );

//Update the render target cube
// car.setInvisible(false);
cubeCamera.position.copy(car.position);
cubeCamera.update(render, scene);

//Render the scenne

// car.setInvisible(true);
render.render(scene, camera);



var boxHelper = new BoxHelper(cube, 0xffff00)
// boxHelper.update()
scene.add(boxHelper)
boxHelper.geometry.computeBoundingBox();

function animate() {
    requestAnimationFrame( animate );
    group.rotation.y += 0.005;
    let speed = 0.01;
    // line.rotation.x += speed;
    // line.rotation.y += speed;
    // line.rotation.z += speed;
    // boxHelper.setFromObject(line)
    boxHelper.setFromObject(cube)
    cube.updateMatrixWorld( true );
    // boxCopy.copy( mesh.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );
    render();
}
animate();

function render() {
    renderer.render( scene, camera );
}