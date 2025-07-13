import React from 'react';
import { Float, MeshWobbleMaterial } from '@react-three/drei';

export default function Torus() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <MeshWobbleMaterial color="#facc15" speed={0.5} factor={0.7} />
      </mesh>
    </Float>
  );
}
