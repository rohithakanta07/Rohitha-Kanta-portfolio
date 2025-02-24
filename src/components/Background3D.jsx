import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function SpaceScene({ timeSpent }) {
  const starsRef = useRef();
  const [intensity, setIntensity] = useState(0.5);
  const [starSpeed, setStarSpeed] = useState(1);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05 * starSpeed;
    }
  });

  useEffect(() => {
    // Time-based animations
    if (timeSpent > 10) {
      setStarSpeed(1.5);
      setIntensity(0.7);
    }
    if (timeSpent > 30) {
      setStarSpeed(2);
      setIntensity(0.9);
    }
  }, [timeSpent]);

  return (
    <>
      <Stars
        ref={starsRef}
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={starSpeed}
      />
      <ambientLight intensity={intensity} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
    </>
  );
}

export default function Background3D({ timeSpent }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundColor: timeSpent > 30 ? 'rgba(10,10,10,0.6)' : 'rgba(10,10,10,0.8)',
        }}
        transition={{ duration: 2 }}
      />
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <SpaceScene timeSpent={timeSpent} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}