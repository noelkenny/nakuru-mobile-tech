const container = document.getElementById("hero3d")

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({alpha:true})

renderer.setSize(window.innerWidth/2,500)

container.appendChild(renderer.domElement)

const geometry = new THREE.TorusKnotGeometry(1,0.3,100,16)

const material = new THREE.MeshStandardMaterial({
color:0x00ffff,
wireframe:true
})

const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

const light = new THREE.PointLight(0xffffff,1)

light.position.set(5,5,5)

scene.add(light)

camera.position.z = 4

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x +=0.01
mesh.rotation.y +=0.01

renderer.render(scene,camera)

}

animate()