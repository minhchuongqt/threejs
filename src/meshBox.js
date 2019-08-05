// All objects, regardless of their distance from the camera, appear the same size,
// even as the window is resized.
// WestLangley

// dom
import * as THREE from 'three'
var container = document.createElement( 'div' );
document.body.appendChild( container );

// renderer
var renderer = new THREE.WebGLRenderer( { clearColor: 0x000000 } );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(16, 8, 16); 
camera.lookAt( scene.position );
scene.add(camera);

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );

// geometry
var geometry = new THREE.CubeGeometry( 3, 4, 8, 2, 3, 4 );

// mesh
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// axes
var axes = new THREE.AxisHelper();
axes.scale.set(1, 1, 1);
scene.add(axes);

// render
renderer.render( scene, camera );

// remember these initial values
var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
var windowHeight = window.innerHeight;

// Event Listeners
// -----------------------------------------------------------------------------
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize( event ) {

    camera.aspect = window.innerWidth / window.innerHeight;
    
    // adjust the FOV
    camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );
    
    camera.updateProjectionMatrix();
    camera.lookAt( scene.position );

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
    
}

