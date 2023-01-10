import React from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader"
import {useLoader} from '@react-three/fiber'
import * as THREE from 'three'

const Lights = ()=>{
    return(
        <>
        <directionalLight 
            position={[5,5,5]} 
            color={'#ffffff'} 
            intensity={0.2}
            target-position={[10,10,10]} 
            castShadow={true}
            shadow-bias={-0.001}
            />
        
        <ambientLight color={'#ff0000'} intensity={0.2}/>
        </>
    )
}
export default Lights