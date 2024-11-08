// Modelo3DViewer.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

// Componente para cargar y animar el modelo GLB
const Modelo3D = ({ modeloPath }: { modeloPath: string }) => {
  // Cargar el modelo GLB y las animaciones
  const { scene, animations } = useGLTF(modeloPath);
  const { actions } = useAnimations(animations, scene);

  // Reproducir la primera animación automáticamente
  React.useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play(); // Inicia la animación
    }
  }, [actions, animations]);

  return <primitive object={scene} />;
};

// Componente principal que configura el canvas de 3D
const Modelo3DViewer = ({ modeloPath }: { modeloPath: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <Modelo3D modeloPath={modeloPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default Modelo3DViewer;