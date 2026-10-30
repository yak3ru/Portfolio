
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function Card() {
  const cardRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!cardRef.current) return;

    // Mouse position controls the card rotation
    const targetX = -pointer.y * 0.18;
    const targetY = pointer.x * 0.18;

    // Smooth rotation
    cardRef.current.rotation.x = THREE.MathUtils.damp(
      cardRef.current.rotation.x,
      targetX,
      4,
      delta
    );

    cardRef.current.rotation.y = THREE.MathUtils.damp(
      cardRef.current.rotation.y,
      targetY,
      4,
      delta
    );
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.08}
      floatIntensity={0.18}
    >
      <group ref={cardRef}>
        {/* 3D Card Body */}
        <RoundedBox
          args={[5.8, 3.8, 0.18]}
          radius={0.15}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#17212e"
            roughness={0.3}
            metalness={0.25}
          />
        </RoundedBox>

        {/* Card Content */}
        <Html
          transform
          center
          distanceFactor={10}
          position={[0, 0, 0.105]}
        >
          <div className="portfolio-card">
            <div className="card-top">
              <span className="availability">
                <span className="status-dot"></span>
                AVAILABLE FOR INTERNSHIP
              </span>

              <span className="card-year">2026</span>
            </div>

            <div className="card-main">
              <p className="greeting">HELLO, I'M</p>

              <h1>
                A Developer<span>.</span>
              </h1>

              <p className="description">
                I build web applications, explore new
                technologies, and turn ideas into
                functional experiences.
              </p>
            </div>

            <div className="card-bottom">
              <span>PORTFOLIO</span>

              <div className="card-links">
                <span>ABOUT</span>
                <span>PROJECTS</span>
                <span>CONTACT</span>
              </div>
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

export default function FloatingCard() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 40,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-4, -3, 4]}
        intensity={1.5}
        color="#4b91ff"
      />

      <Card />
    </Canvas>
  );
}
