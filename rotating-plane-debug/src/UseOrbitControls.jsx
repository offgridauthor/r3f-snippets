import { useControls, button } from 'leva'


export default function UseOrbitControls() {

    return useControls('camera', {
        enabled: true,
        enableDamping: true,
        dampingFactor: 0.05,
        enableZoom: true,
        enableRotate: true,
        enablePan: true,
        autoRotate: true,
        autoRotateSpeed: -0.5,
        rotateSpeed: 0.5,

    })


}
