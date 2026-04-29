import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const TorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + mouse.y * 0.3;
      meshRef.current.rotation.y = t * 0.2 + mouse.x * 0.4;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.15 + mouse.y * 0.3;
      wireRef.current.rotation.y = t * 0.2 + mouse.x * 0.4;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#0aa8c4"
          roughness={0.15}
          metalness={0.85}
          distort={0.28}
          speed={1.3}
          emissive="#22d3ee"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={wireRef} scale={1.04}>
        <torusKnotGeometry args={[1.1, 0.32, 120, 16]} />
        <meshBasicMaterial color="#7df9ff" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -2]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[3, -2, 4]} intensity={0.8} color="#fbbf24" />
        <TorusKnot />
        <Stars radius={50} depth={40} count={1500} factor={4} saturation={0} fade speed={0.6} />
      </Suspense>
    </Canvas>
  );
};
