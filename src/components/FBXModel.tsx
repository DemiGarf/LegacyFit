import React, { useRef, useEffect, useState } from 'react';
import { useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FBXModelProps {
  fbxUrl: string;
  animationUrl?: string;
}

const FBXModel: React.FC<FBXModelProps> = ({ fbxUrl, animationUrl }) => {
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadModel = async () => {
      try {
        const loadedModel = await useFBX(fbxUrl);
        if (isMounted) {
          setModel(loadedModel as THREE.Object3D);
          setIsModelLoaded(true);  // Marca como cargado solo si el modelo fue exitoso
        }
      } catch (error) {
        console.error("Error loading FBX model:", error);
        setIsModelLoaded(false);  // Permite que el cubo de prueba se muestre si hay un error
      }
    };

    loadModel();

    return () => {
      isMounted = false;
    };
  }, [fbxUrl]);

  useEffect(() => {
    if (model && animationUrl) {
      const animation = useFBX(animationUrl);
      if (animation.animations.length > 0) {
        mixer.current = new THREE.AnimationMixer(model);
        const action = mixer.current.clipAction(animation.animations[0]);
        action.play();
      }
    }
  }, [model, animationUrl]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  // Solo muestra el modelo si fue cargado correctamente; si no, muestra el cubo de prueba
  return isModelLoaded && model ? (
    <primitive object={model} />
  ) : (
    <mesh>
      <boxGeometry args={[8, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default FBXModel;
