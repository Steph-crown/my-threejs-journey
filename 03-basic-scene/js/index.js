/**
 * * WHAT'S NEEDED
 * Four basic elements needed to create a scene
 * - The scene that will contain objects
 * - Some objects
 * - A camera
 * - A renderer
 *
 * * SCENE
 * - It's like a container
 * - We put objects, models, lights, cameras, etc. in it.
 * - At some point, we ask three.js to render the scene
 * const scene = new THREE.Scene()
 *
 * * OBJECTS
 * Can be many things
 * - primitive geometries
 * - imported models
 * - particles
 * - lights
 *
 * * To create a visible object, we call it a MESH
 * - combination of a geometry (the shape) and a material (how it looks)
 * - Start with a *BoxGeometry* and a *MeshBasicMaterial*
 *
 * * CAMERA
 * - not visible
 * - serves as a point of view when doing a render
 * - can have multiple cameras in a programme, by switching between them
 * - PerspectiveCamera is most used. its projection mode is designed to mimic the way the human eye sees
 *
 * * fov Field of View
 * - Vertical vision angle
 * - in degrees
 * - the more the fov, the wider the view
 *
 * * aspect ratio
 * - the width of the render divided by the height of the render
 *
 * * RENDERER
 * - renders the scene from the camera pov
 * - draws result onto a canvas
 * - three.js uses webgl to draw this render onto the canvas
 * - you can create the canvas and reference it or let three.js create it for you
 *
 * * to transform an object, we can use the following properties
 * - position
 * - rotation
 * - scale
 */

const sizes = {
  width: 800,
  height: 600,
};
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1); // creates a box
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

const canvas = document.getElementById("red-box");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

console.log("Scene is", scene);
