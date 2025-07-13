import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial } from '@react-three/drei';
import Torus from './three/Torus';
import Lights from './three/Lights';

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Lights />
        {/* Add your 3D components here */}
      <Torus />
      {/* Add more 3D elements here if needed */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.2, 0.4, 16, 100]} />
          <MeshWobbleMaterial color="#facc15" speed={0.5} factor={0.7} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
