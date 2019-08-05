import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(90, 1, 2.5, 10.0);
camera.position.set(3.50, -2.80, 8.561);
camera.lookAt(new THREE.Vector3(0, 0, 4.87));
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var boxGeometry = new THREE.BoxGeometry(4, 4, 4);
boxGeometry.computeBoundingBox();

let boxFrameGeometry = new THREE.Geometry();
{
    // bottom
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, 0.5));
    // top
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, 0.5));
    // sides
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, 0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, -0.5, -0.5));
    boxFrameGeometry.vertices.push(new THREE.Vector3(-0.5, 0.5, -0.5));
}



var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.3,
    depthTest: true,
    depthWrite: false
});

var box = new THREE.Mesh(boxGeometry, material);

box.geometry.computeBoundingBox();
var boundingBox = box.geometry.boundingBox;
scene.add(box);


camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();