/**
 * Projects page background script
 * Renders the same 3D Rubik's cube as the main page
 */

// Scene initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('canvas-container').appendChild(renderer.domElement);

camera.position.z = 4;

/**
 * Setup lighting for the scene
 */
function setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);
}

/**
 * Initialize the Rubik's cube
 */
function initializeCube() {
    const rubiksCube = RubiksCube.create();
    rubiksCube.position.set(0, 0, 0);
    scene.add(rubiksCube);
    return rubiksCube;
}

/**
 * Main animation loop
 */
function animate() {
    requestAnimationFrame(animate);

    RubiksCube.rotate(rubiksCube, 0.003, 0.005, 0.002);

    renderer.render(scene, camera);
}

/**
 * Handle window resize events
 */
function setupResponsive() {
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/**
 * Handle mouse movement for camera interaction
 */
function setupMouseInteraction() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Subtle camera tilt based on mouse position
        camera.position.x = mouseX * 0.5;
        camera.position.y = mouseY * 0.5;
        camera.lookAt(rubiksCube.position);
    });
}

// Initialize application
setupLighting();
const rubiksCube = initializeCube();
setupResponsive();
setupMouseInteraction();
animate();
