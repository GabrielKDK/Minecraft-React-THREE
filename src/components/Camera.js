import React from 'react'
import {PerspectiveCamera} from '@react-three/drei'
const Camera = ()=>{
    return(
        <PerspectiveCamera 
        makeDefault
        position={[-20,20,20]}
        fov={50}/>
    )
}
export default Camera