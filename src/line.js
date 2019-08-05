
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

import iceTexture from "./textures/ice.jpg"; // ice cube texture image

const threejsContainer = document.getElementById("threejs"); // get container
let scene,
    camera,
    geometry,
    texture,
    material,
    cube,
    renderer,
    hemiLight,
    line,
    dirLight;

material = new LineBasicMaterial({
    color: 0x44aa88
});
geometry = new Geometry();
geometry.vertices.push(
    new Vector3(-1, 0, 0),
    new Vector3(0, 2, 0),
    new Vector3(1, 0, 0),
    new Vector3(0, -1, 0),
    new Vector3(-1, 0, 0),
);
line = new Line( geometry, material );




// setup lights
dirLight = new DirectionalLight("#ce7c5f", 1.4);
dirLight.position.set(1, 1, 1);
hemiLight = new HemisphereLight("#afe273", "#f4dcc6", 0.5);

// create and add everything to the scene
scene = new Scene();

scene.add( line );

//Hepler Box
var helper = new THREE.BoxHelper(line, 0xffff00);
scene.add(helper);


scene.add(line, dirLight, hemiLight);

// setup camera
// camera = new PerspectiveCamera(50, innerWidth / 2 / innerHeight, 1, 1000);
camera = new PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
camera.position.z = 3; // move camera back 3 units


// setup renderer (using WebGL)
renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth / 2, innerHeight);
renderer.gammaOutput = true; // realistic lighting effect

renderer.setAnimationLoop(() => {
    // rotate ice cube
    // let speed = 0.01;
    // line.rotation.x += speed;
    // line.rotation.y += speed;
    // line.rotation.z += speed;

    // render
    renderer.render(scene, camera);
});

// add result to container
threejsContainer.appendChild(renderer.domElement);