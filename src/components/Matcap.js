import React from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader"
import {useLoader} from '@react-three/fiber'

const Matcap = ()=>{
    const matcap = useLoader(
        TextureLoader,
        './matcaps/matcap5.png')
    return(
        <mesh position = {[-3,0,0]}>
          <boxBufferGeometry args={[1,1,1]}/>
          <meshMatcapMaterial matcap={matcap}/>
        </mesh>
    )
}
export default Matcap