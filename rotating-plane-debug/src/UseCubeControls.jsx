import {useControls} from 'leva'

export default function UseCubeControls() {

        return useControls('cube', {
        scale:
        {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        }
        })

}
