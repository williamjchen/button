import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.z = 2

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color:0x44aa88})
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const render = (time) => {
  time *= 0.001;
 
  cube.rotation.x = time;
  cube.rotation.y = time;
 
  renderer.render(scene, camera);
 
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

//renderer.render(scene, camera)