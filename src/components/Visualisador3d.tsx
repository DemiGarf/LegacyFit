import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FBXModel from './FBXModel';

interface FBXViewerProps {
  fbxUrl: string;
  animationUrl?: string;
}

const FBXViewer: React.FC<FBXViewerProps> = ({ fbxUrl, animationUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1,
          }}
        >
          Loading 3D model...
        </div>
      )}
      <Canvas
        style={{ background: '#1e1e1e' }}
        camera={{ position: [0, 2, 10], fov: 45 }}
        onCreated={() => setIsLoading(false)} // Oculta el mensaje de carga una vez que el modelo esté listo
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <FBXModel fbxUrl={fbxUrl} animationUrl={animationUrl} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
};

export default FBXViewer;
