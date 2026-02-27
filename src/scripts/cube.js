/**
 * Rubik's Cube Module
 * Handles creation and management of the 3D Rubik's cube
 */

const RubiksCube = (() => {
    const cubeSize = 0.3;
    const spacing = 0.05;
    const totalSize = cubeSize * 3 + spacing * 2;

    // Standard Rubik's cube colors
    const colors = {
        white: 0xffffff,
        yellow: 0xffed00,
        red: 0xff0000,
        orange: 0xff8c00,
        blue: 0x0051ba,
        green: 0x00a651
    };

    /**
     * Create a 3x3x3 Rubik's cube
     * @returns {THREE.Group} The cube group
     */
    function create() {
        const rubiksCube = new THREE.Group();
        const positions = [];

        // Generate all 27 cube positions
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    positions.push({ x, y, z });
                }
            }
        }

        // Create each small cube
        positions.forEach(pos => {
            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const materials = [];

            // Right face (red)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.x > 0 ? colors.red : 0x1a1a2e,
                roughness: 0.4
            }));

            // Left face (orange)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.x < 0 ? colors.orange : 0x1a1a2e,
                roughness: 0.4
            }));

            // Top face (white)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.y > 0 ? colors.white : 0x1a1a2e,
                roughness: 0.4
            }));

            // Bottom face (yellow)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.y < 0 ? colors.yellow : 0x1a1a2e,
                roughness: 0.4
            }));

            // Front face (blue)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.z > 0 ? colors.blue : 0x1a1a2e,
                roughness: 0.4
            }));

            // Back face (green)
            materials.push(new THREE.MeshStandardMaterial({
                color: pos.z < 0 ? colors.green : 0x1a1a2e,
                roughness: 0.4
            }));

            const cube = new THREE.Mesh(geometry, materials);

            // Position the cube
            const offsetSize = cubeSize + spacing;
            cube.position.set(
                pos.x * offsetSize - totalSize / 2 + cubeSize / 2 + offsetSize / 2,
                pos.y * offsetSize - totalSize / 2 + cubeSize / 2 + offsetSize / 2,
                pos.z * offsetSize - totalSize / 2 + cubeSize / 2 + offsetSize / 2
            );

            rubiksCube.add(cube);
        });

        return rubiksCube;
    }

    /**
     * Rotate the cube
     * @param {THREE.Group} cube - The cube to rotate
     * @param {number} xDelta - X-axis rotation increment
     * @param {number} yDelta - Y-axis rotation increment
     * @param {number} zDelta - Z-axis rotation increment
     */
    function rotate(cube, xDelta = 0.003, yDelta = 0.005, zDelta = 0.002) {
        cube.rotation.x += xDelta;
        cube.rotation.y += yDelta;
        cube.rotation.z += zDelta;
    }

    return {
        create,
        rotate,
        colors
    };
})();
