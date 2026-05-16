import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Neural network / data-science inspired wireframe: nodes connected by lines
// arranged on a sphere — evokes a computer-engineer / data-scientist graph.
const NeuralGraph = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, lineGeometry } = useMemo(() => {
    const COUNT = 220;
    const RADIUS = 2.1;
    const pts: THREE.Vector3[] = [];
    // Fibonacci sphere distribution
    for (let i = 0; i < COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push(
        new THREE.Vector3(
          RADIUS * Math.sin(phi) * Math.cos(theta),
          RADIUS * Math.sin(phi) * Math.sin(theta),
          RADIUS * Math.cos(phi)
        )
      );
    }

    // connect each node to its nearest neighbours
    const positions: number[] = [];
    const K = 3;
    for (let i = 0; i < pts.length; i++) {
      const dists = pts
        .map((p, j) => ({ j, d: pts[i].distanceTo(p) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, K);
      for (const { j } of dists) {
        positions.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    const nodePositions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      nodePositions[i * 3] = p.x;
      nodePositions[i * 3 + 1] = p.y;
      nodePositions[i * 3 + 2] = p.z;
    });

    return { nodes: nodePositions, lineGeometry: geom };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15 + mouse.x * 0.4;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mouse.y * 0.3;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef}>
        <lineSegments>
          <primitive object={lineGeometry} attach="geometry" />
          <lineBasicMaterial color="#22d3ee" transparent opacity={0.55} />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#7df9ff" size={0.05} sizeAttenuation transparent opacity={0.9} />
        </points>
      </group>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
        <NeuralGraph />
      </Suspense>
    </Canvas>
  );
};
