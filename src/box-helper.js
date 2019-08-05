
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




var sphere = new THREE.SphereGeometry();
var object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000));
var box = new THREE.BoxHelper(object, 0xffff00);
scene.add(object);
scene.add(box);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    object.rotation.x += 0.01;
    object.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();