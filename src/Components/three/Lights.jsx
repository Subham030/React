// src/components/three/Lights.jsx
import React from 'react';

export default function Lights() {
  return (
    <>
      {/* Ambient light: soft, uniform light for overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light: like the sun */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Point light: glowing light from a single point (like a bulb) */}
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#facc15" />

      {/* SpotLight for dramatic focus if needed */}
      <spotLight
        position={[0, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.6}
        castShadow
      />
    </>
  );
}
