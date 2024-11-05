import React, { useRef, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

interface FBXModelProps {
  fbxUrl: string;
  animationUrl?: string;
}

const FBXModel: React.FC<FBXModelProps> = ({ fbxUrl, animationUrl }) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  // Cargar el modelo usando `useLoader`
  const model = useLoader(FBXLoader, fbxUrl, (loader) => {
    loader.load(
      fbxUrl,
      (loadedModel) => {
        setIsModelLoaded(true);  // Marca el modelo como cargado cuando es exitoso
        if (animationUrl) {
          // Solo carga la animación si se pasa `animationUrl`
          const animation = loader.load(animationUrl);
          mixer.current = new THREE.AnimationMixer(loadedModel);
          const action = mixer.current.clipAction(animation.animations[0]);
          action.play();
        }
      },
      undefined,
      (error) => {
        console.error("Error loading FBX model:", error);
        setIsModelLoaded(false);
      }
    );
  });

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  // Solo muestra el modelo si fue cargado correctamente; si no, muestra el cubo de prueba
  return isModelLoaded ? (
    <primitive object={model} />
  ) : (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default FBXModel;
