import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Camera from './components/Camera'
import Matcap from './components/Matcap'
import Bricks from './components/Bricks'
import { Suspense } from "react"
import Lights from "./components/Lights"
import { Environment } from '@react-three/drei'
import { Minecraft } from "./components/Minecraft"
import * as THREE from 'three'
function App() {
  
  return (
    <div
      className="Container"
      style={{width:"100%", height:"100vh"}}
    >
      <Canvas shadowMap shadows='true'
      gl={{
        antialias: true,
        toneMapping: THREE.ReinhardToneMapping,
        toneMappingExposure: 1.5
      }}>
        <Camera/>
        <Lights/>
        <mesh 
        position = {[3,0,0]} 
        rotation-z={Math.PI * 0.25}
        rotation-x={Math.PI * 0.25}
        >
          <torusKnotBufferGeometry args={[.3,.1,100,100]}/>
          <meshNormalMaterial flatShading={true}/>
        </mesh>
        <Suspense fallback={null}>

        <Matcap />
        <Minecraft />
        <Bricks />
        <Environment files={'./hdr/decor_shop_1k.hdr'}/>
        </Suspense>
        <OrbitControls target={[1,10,0]}/>
      </Canvas>
    </div>
  )
}

export default App;
