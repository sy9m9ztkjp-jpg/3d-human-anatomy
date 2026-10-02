import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// Light
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2, 2, 5);
scene.add(light);


// 3D test object
const geometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshStandardMaterial({
    color: 0x00aaff
});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);


// Controls
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;


// Animation
function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();


// Resize
window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
