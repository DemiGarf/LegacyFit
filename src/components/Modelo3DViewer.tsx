// Modelo3DViewer.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Componente para cargar el modelo GLB
const Modelo3D = ({ modeloPath }: { modeloPath: string }) => {
  const { scene } = useGLTF(modeloPath); // Cargar el modelo GLB desde la URL proporcionada

  return <primitive object={scene} />;
};

// Componente principal que configura el canvas de 3D
const Modelo3DViewer = ({ modeloPath }: { modeloPath: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} /> {/* Luz ambiental */}
      <directionalLight position={[10, 10, 5]} intensity={1} /> {/* Luz direccional */}
      <Modelo3D modeloPath={modeloPath} /> {/* Cargar y mostrar el modelo */}
      <OrbitControls /> {/* Permite mover la cámara con el mouse */}
    </Canvas>
  );
};

export default Modelo3DViewer;
