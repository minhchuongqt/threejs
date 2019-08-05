
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

var geometry = new THREE.CircleGeometry( 5, 32 );
var circle = new THREE.Mesh( geometry, material );
circle.material.side = THREE.BackSide; // back faces
circle.renderOrder = 0;

circle.geometry.computeBoundingBox();

group.add(circle);
var circleFront = new THREE.Mesh(geometry, material.clone());
circleFront.material.side = THREE.FrontSide; // front faces
circleFront.renderOrder = 1;
// group.add(cubeFront);

// Line
var lineMaterial = new LineBasicMaterial({
    color: 0x44aa88
});
var lineGeometry = new Geometry();
lineGeometry.vertices.push(
    new Vector3(-1, 10, 10),
    new Vector3(10, 2, 10),
    new Vector3(1, 10, 10),
    new Vector3(10, -1, 10),
    new Vector3(-1, 10, 10),
);
// var line = new Line( lineGeometry, lineMaterial );
// line.geometry.computeBoundingBox();
// console.log(line)
// group.add(line)

var boxHelper = new BoxHelper(circle, 0xffff00)
// boxHelper.update()
scene.add(boxHelper) 
boxHelper.geometry.computeBoundingBox();

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005;
    // group.rotation.x += 0.005;
    // group.rotation.z += 0.005;
    let speed = 0.001;
    circle.rotation.x += speed;
    circle.rotation.y += speed;
    circle.rotation.z += speed;
    // cubeFront.rotation.x += speed;
    // cubeFront.rotation.y += speed;
    // cubeFront.rotation.z += speed;
    // line.rotation.x += speed;
    // line.rotation.y += speed;
    // line.rotation.z += speed;
    // boxHelper.setFromObject(line)
    boxHelper.setFromObject(circle)
    circle.updateMatrixWorld(true);
    // boxCopy.copy( mesh.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );
    render();
}
animate();

function render() {
    renderer.render(scene, camera);
}