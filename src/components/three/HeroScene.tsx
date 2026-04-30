import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import profileImg from "@/assets/profile.jpeg";

const PortraitCard = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, profileImg);
  texture.anisotropy = 8;

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.3,
        0.05
      );
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Glowing back ring */}
        <mesh ref={ringRef} position={[0, 0, -0.25]}>
          <torusGeometry args={[1.85, 0.025, 16, 120]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
        </mesh>

        {/* Outer cyan frame */}
        <mesh position={[0, 0, 0.05]}>
          <ringGeometry args={[1.55, 1.62, 64]} />
          <meshBasicMaterial color="#7df9ff" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>

        {/* Portrait disc */}
        <mesh>
          <circleGeometry args={[1.5, 96]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.35}
            metalness={0.05}
            emissive="#0aa8c4"
            emissiveIntensity={0.04}
          />
        </mesh>

        {/* Subtle wireframe halo */}
        <mesh scale={1.08}>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshBasicMaterial color="#7df9ff" wireframe transparent opacity={0.08} />
        </mesh>
      </group>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -2]} intensity={1.4} color="#22d3ee" />
        <pointLight position={[3, -2, 4]} intensity={0.6} color="#fbbf24" />
        <PortraitCard />
        <Stars radius={50} depth={40} count={1500} factor={4} saturation={0} fade speed={0.6} />
      </Suspense>
    </Canvas>
  );
};
