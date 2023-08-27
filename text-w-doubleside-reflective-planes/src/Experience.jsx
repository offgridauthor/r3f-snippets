import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh ref={sphere} position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={cube} position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
        </mesh>

        <mesh position-y={3}
            rotation-x={- Math.PI}
            position-z={-3}
            scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                side={2}
                color="grey"
            />
        </mesh>
        <mesh position-y={3}
            rotation-x={- Math.PI * 0.5}
            position-x={-5}
            rotation-y={Math.PI * 0.5}
            scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                side={2}
                color="grey"
            />
        </mesh>
        <mesh position-y={- 1}
            rotation-x={- Math.PI * 0.5}
            scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                side={2}
                color="grey"
            />
        </mesh>
        <mesh position-y={6}
            rotation-y={-Math.PI}
            rotation-x={- Math.PI * 0.5}
            rotation-z={-Math.PI * 0.5}
            scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                side={2}
                mirror={0.5}
                color="grey"
            />
        </mesh>
        <mesh position-y={3}
            position-x={5}
            rotation-y={-Math.PI * 0.5}
            rotation-x={- Math.PI * 0.5}
            rotation-z={-Math.PI * 0.5}
            scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                side={2}
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color="grey"
            />
        </mesh>

        <Float
            speed={1}
            floatIntensity={8}
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="salmon"
                position-y={3}
                position-x={- 2}
                maxWidth={2}
                textAlign="left"
                outlineWidth={0.01}
                outlineColor="brown"
                outlineBlur={0.5}
                outlineOffsetY={-5}
            >
                Zoom in & out !
            </Text>
        </Float>

    </>

}
