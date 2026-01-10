"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SystemsGlobe() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!group.current) return;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * 0.2,
      0.035
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.3,
      0.035
    );

    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>

      {/* CORE */}
      <mesh scale={2}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          color="#092663"
          roughness={0.22}
          metalness={0.45}
        />
      </mesh>

      {/* GRID */}
      <mesh scale={2.03}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#4f6ef7"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* BIG DRS TEXT */}
      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        size={0.8}
        height={0.14}
        position={[-0.95, 0, 2.15]}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelSegments={8}
      >
        DRS
        <meshStandardMaterial
          color="#ffffff"
          emissive="#4f6ef7"
          emissiveIntensity={0.85}
          metalness={0.45}
          roughness={0.2}
        />
      </Text3D>

      {/* ATMOS GLOW */}
      <mesh scale={2.18}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#092663"
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <directionalLight position={[-6, -4, -6]} intensity={0.6} />

      <SystemsGlobe />
    </Canvas>
  );
}