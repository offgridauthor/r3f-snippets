import { OrbitControls } from '@react-three/drei'

import UseSphereControls from './UseSphereControls'
import UseCubeControls from './UseCubeControls'
import UseDebugControls from './UseDebugControls'
import UseOrbitControls from './UseOrbitControls'
import GradientPlane from './GradientPlane'

export default function Experience() {
// uncomment to reveal cube and square with debug and perf controls
    /*     const { position, color, visible } = UseSphereControls() */
    /*     const { scale } = UseCubeControls() */
    /*     const { perfVisible } = UseDebugControls() */
    const { enabled, dampingFactor, autoRotate, autoRotateSpeed } = UseOrbitControls()

    return <>
        <OrbitControls makeDefault autoRotate={autoRotate} enabled={enabled} dampingFactor= {dampingFactor} autoRotateSpeed={autoRotateSpeed} />
        {/*         {perfVisible} */}
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* <mesh visible={visible} position={[position.x, position.y, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh position-x={2} scale={scale}  >
            <boxGeometry />
            <meshStandardMaterial color="grey" />
        </mesh> */}

        <GradientPlane />
    </>
}
