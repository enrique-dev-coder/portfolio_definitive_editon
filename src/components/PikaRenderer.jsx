import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Pika } from '@/3dModels/Pika';

const PikaRenderer = () => {
  return (
    <div className="w-[90%] mx-auto h-full bg-dark dark:bg-primaryDark/60 rounded-full p-8">
      <Canvas
        style={{ height: '100%', width: '100%' }}
        camera={{ position: [0, 0, 5], fo: 75, near: 0.1, far: 1000 }}
      >
        <directionalLight intensity={2.5} position={[0, 1, 0]} castShadow />
        <ambientLight intensity={0.5} castShadow />
        {/* Configuración de sombras */}
        <fog attach="fog" args={['black', 5, 20]} />

        <Suspense fallback={null}>
          <Pika
            castShadow
            receiveShadow
            rotation={[0, 0.25, 0]}
            position={[0, -3, 0]}
            scale={[0.6, 0.6, 0.6]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PikaRenderer;
