import type React from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Aj1Model, Stage } from '@src/components';

/**
 * 編集モデルの描画機能
 */
export const EditModelCanvas: React.FC = () => {
  return (
    <Canvas flat dpr={window.devicePixelRatio}>
      <PerspectiveCamera makeDefault position={[-10, Math.PI / 5, 20]} />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom
        maxPolarAngle={Math.PI / 1}
        minPolarAngle={Math.PI / 6}
        maxDistance={12}
        minDistance={5}
      />
      <Stage position={[0, 0.9, 0]} intensity={0}>
        <Aj1Model rotation={[0, 0, 0.2]} />
      </Stage>
    </Canvas>
  );
};
