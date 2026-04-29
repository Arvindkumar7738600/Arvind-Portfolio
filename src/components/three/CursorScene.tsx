import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const CursorCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse, clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 + mouse.y * 0.01;
      meshRef.current.rotation.y += 0.008 + mouse.x * 0.01;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 1.2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.8, 0.05);
    }
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
      wireRef.current.position.copy(meshRef.current.position);
      wireRef.current.scale.setScalar(1.15 + Math.sin(clock.getElapsedTime() * 2) * 0.03);
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#0d1421" metalness={0.9} roughness={0.2} emissive="#22d3ee" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.6} />
      </mesh>
    </>
  );
};

export const CursorScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-3, -3, 2]} intensity={0.6} color="#fbbf24" />
        <CursorCube />
      </Suspense>
    </Canvas>
  );
};
