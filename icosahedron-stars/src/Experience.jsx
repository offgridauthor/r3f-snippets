import { useMatcapTexture, Center, Text3D, OrbitControls, Icosahedron, Stars, Sky, Sparkles } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const material = new THREE.MeshMatcapMaterial()

export default function Experience() {
    const icoRef = useRef()

    const [goldyTexture] = useMatcapTexture('422509_C89536_824512_0A0604', 1024)

    useEffect(() => {
        goldyTexture.encoding = THREE.sRGBEncoding
        goldyTexture.needsUpdate = true

    }, [])

    return <>

        <OrbitControls makeDefault autoRotate={true} enabled={true} autoRotateSpeed={0.5} />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Stars radius={3} depth={4} count={20000} factor={1} saturation={1} fade={true} speed={0.5} />
        <Sparkles count={1000} color={0xffffff} speed={0.1} size={7} scale={10} />
        <Center>
            <Text3D
                material={material}
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >

            </Text3D>
        </Center>
        <Icosahedron args={[20]} ref={icoRef}>
            <meshMatcapMaterial
                side={THREE.DoubleSide}
                matcap={goldyTexture}
            />
        </Icosahedron>

        {/* {[...Array(100)].map((value, index) =>
            <mesh
                ref={(element) => triangles.current[index] = element}
                key={index}
                geometry={coneGeometry}
                material={skyMaterial}
                transparent={true}
                opacity={0.4}
                position={[
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                ]}
                scale={0.2 + Math.random() * 0.2}
                rotation={[
                    Math.random() * Math.PI,
                    0,
                    Math.random() * Math.PI
                ]}
            >
                <coneGeometry args={[1, 1, 15, 45]} />
            </mesh>
        )} */}

    </>
}
