import type React from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, PerspectiveCamera, useProgress } from '@react-three/drei';
import { Aj1Model, Layout, Stage } from '@src/components';
import {
  Button,
  CanvasWrapper,
  ContentsHeading,
  ContentsWrapper,
  HeadingImage,
} from './style';

export const ShareGotem: React.FC = () => {
  const { active } = useProgress();

  return (
    <Layout>
      <Loader />
      <CanvasWrapper isActive={active}>
        <HeadingImage isActive={active}>
          <img src="/aj-alchemy/svg/decoration_text-gotem.svg" alt="GOT'EM" />
        </HeadingImage>
        <Canvas flat>
          <Stage>
            <PerspectiveCamera makeDefault position={[0.3, Math.PI / 5, 80]} />
            <Aj1Model
              clickZooom={false}
              position={[0, 0.36, 0]}
              rotation={[0, 0.7, -0.01]}
            />
          </Stage>
        </Canvas>
      </CanvasWrapper>

      <ContentsWrapper>
        <ContentsHeading>エアージョーダン 1 HIGH OG</ContentsHeading>
        <p>
          共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります共有ページの説明・画像生成機能が入ります
        </p>
        <Button>共有する</Button>
      </ContentsWrapper>
    </Layout>
  );
};
