"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.25,
      0.05
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.35,
      0.05
    );

    ref.current.rotation.y += 0.002;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#092663"
          wireframe
          roughness={0.35}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 6, 6]} intensity={1} />
      <Globe />
    </Canvas>
  );
}