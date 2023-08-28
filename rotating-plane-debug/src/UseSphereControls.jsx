import { useControls, button } from 'leva'


export default function UseSphereControls() {


    return useControls('sphere', {
        position:
        {
            value: { x: - 2, y: 0 },
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        myInterval:
        {
            min: 0,
            max: 10,
            value: [4, 5],
        },
        clickMe: button(() => { console.log('ouch seriously') }),
        choice: { options: ['a', 'b', 'c'] }
    })


}
