import { useFrame } from '@react-three/fiber'
import { meshBounds, useGLTF, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()
    const hamburger = useRef()

    const hamburgerGlb = useGLTF('./hamburger.glb')

    useFrame((state, delta) => {
        cube.current.rotation.y += delta * 0.2
    })

    const juggleHandler = (event) => {
        // console.log(event)
        
        const tempPos = { ...event.object.position }
        if (event.object === cube.current) {
            event.object.position.copy(sphere.current.position)
            sphere.current.position.copy(tempPos)
        } else if (event.object === sphere.current) {
            event.object.position.copy(hamburger.current.position)
            hamburger.current.position.copy(tempPos)
        }
        // hamburger is a primitive type; it needs to be accounted for differently
        
        /* else {
*     event.object.position.copy(cube.current.position)
*     cube.current.position.copy(tempPos)
* } */
    }

    return <>

        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh
            ref={sphere}
            position-x={- 2}
            onClick={juggleHandler}
            /*             onClick={ (event) => event.stopPropagation() } */
            onPointerEnter={(event) => event.stopPropagation()}
        >
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
            ref={cube}
            // raycast={ meshBounds }
            position-x={2}
            scale={1.5}
            onClick={juggleHandler}
            onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={() => { document.body.style.cursor = 'default' }}
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <primitive
            ref={hamburger}
            object={hamburgerGlb.scene}
            scale={0.25}
            position-y={0.5}
            onClick={juggleHandler}
        ></primitive>
    </>
}
