import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function UseDebugControls() {

    const  perfVisible  = useControls('debug', {
    perfVisible: true
})


    return (
        <>
             {perfVisible && <Perf position="top-left" />}
        </>
    )

}
 
