import type React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Aj1Model } from '@src/components';
import { SelectToZoom } from '@src/features/EditModelCanvas/SelectToZoom';

/**
 * 編集モデルの描画機能
 */
export const EditModelCanvas: React.FC = () => {
  return (
    <Canvas flat>
      <Stage>
        <OrbitControls
          makeDefault
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          enablePan={false}
          enableZoom={true}
          maxDistance={10}
          minDistance={1}
        />

        <SelectToZoom>
          <Aj1Model rotation={[0, 0.3, 0.2]} />
        </SelectToZoom>
      </Stage>
    </Canvas>
  );
};
