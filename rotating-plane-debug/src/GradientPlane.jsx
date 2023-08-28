import { useControls } from 'leva'
import {GradientTexture, GradientType} from '@react-three/drei'

export default function GradientPlane() {

    const { stop1, stop2, stop3, stop4, stop5 } = useControls({
        stop1: '#ffffff',
        stop2: '#000000',
        stop3: '#333bbb',
        stop4: '#aa33ff',
        stop5: '#ff3300',
    })
    const {gradientType} = useControls({
        gradientType: {
            value: GradientType.Radial,
            options: {
                Linear: GradientType.Linear,
                Radial: GradientType.Radial,
            }
        }
    })

    return (
        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={20}>
            <planeGeometry />
            <meshStandardMaterial >
                <GradientTexture stops={[0, 0.25, 0.5, 0.75, 1]}
                    colors={[stop1, stop2, stop3, stop4, stop5]}
                                 type={gradientType}

                />
            </meshStandardMaterial>
        </mesh>

    )
}
