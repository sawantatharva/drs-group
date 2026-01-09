"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SystemsGlobe() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!group.current) return;

    // Subtle interaction (professional, not playful)
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * 0.25,
      0.035
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.35,
      0.035
    );

    // Constant slow rotation (authority)
    group.current.rotation.y += 0.0012;
  });

  return (
    <group ref={group}>
      {/* CORE — DRS Infrastructure */}
      <mesh scale={2}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          color="#092663"
          roughness={0.22}
          metalness={0.45}
        />
      </mesh>

      {/* CONNECTIVITY GRID — Smart Systems */}
      <mesh scale={2.03}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#4f6ef7"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* CONSULTING / EXECUTION RING */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.35, 0.015, 16, 160]} />
        <meshStandardMaterial
          color="#092663"
          emissive="#092663"
          emissiveIntensity={0.35}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* SMART SOLUTION NODES */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 2.25,
              Math.sin(angle) * 0.6,
              Math.sin(angle) * 2.25,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#4f6ef7"
              emissiveIntensity={0.9}
            />
          </mesh>
        );
      })}

      {/* ATMOSPHERIC SYSTEM GLOW */}
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
      {/* Lighting — deliberate & directional */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <directionalLight position={[-6, -4, -6]} intensity={0.6} />

      <SystemsGlobe />
    </Canvas>
  );
}