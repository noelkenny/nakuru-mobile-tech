const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,400);

document.getElementById("three-container").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
color:0x00ffff,
wireframe:true
});

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

cube.rotation.x +=0.01;
cube.rotation.y +=0.01;

renderer.render(scene,camera);

}

animate();

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader()

loader.load(

"assets/models/laptop.glb",

function(gltf){

const laptop = gltf.scene

laptop.scale.set(2,2,2)

scene.add(laptop)

animate()

},

undefined,

function(error){

console.error(error)

}

)

