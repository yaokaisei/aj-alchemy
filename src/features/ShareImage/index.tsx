import type React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { Aj1Model, Stage } from '@src/components';
import { useMaterial } from '@src/stores/materialState';
import { useShareImageUrl } from '@src/stores/shareImageUrlState';
import { ImageLayerFrame } from './ImageLayerFrame';
import { Wrapper, CanvasWrapper, ContentsWrapper } from './style';

const Scene: React.FC = () => {
  const { gl, scene, camera } = useThree();
  const { setShareImageUrl } = useShareImageUrl();
  const { materials } = useMaterial();

  useEffect(() => {
    gl.render(scene, camera);
    const date = gl.domElement.toDataURL('image/png');
    setShareImageUrl(date);
  }, [camera, gl, scene, setShareImageUrl, materials]);

  return (
    <Stage>
      <Aj1Model rotation={[0, 0.5, 0.2]} />
    </Stage>
  );
};

export const ShareImage: React.FC = () => {
  const { shareImageUrl } = useShareImageUrl();

  return (
    <Wrapper>
      <CanvasWrapper>
        <Canvas flat>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <Scene />
        </Canvas>
      </CanvasWrapper>
      <ContentsWrapper>
        <ImageLayerFrame imagePath={shareImageUrl} />
      </ContentsWrapper>
    </Wrapper>
  );
};
