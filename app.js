import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// Lighting

const light = new THREE.HemisphereLight(
    0xffffff,
    0x444444,
    3
);

scene.add(light);


// Temporary human placeholder

const material = new THREE.MeshStandardMaterial({
    color: 0xdddddd
});

const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.5, 2, 8, 16),
    material
);

scene.add(body);


// Controls

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;


// Animation

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();


// Resize

window.addEventListener('resize', () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
