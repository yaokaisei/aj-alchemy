import type React from 'react';
import { PerspectiveCamera, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Aj1Model, Layout, Stage } from '@src/components';
import {
  Button,
  CanvasWrapper,
  ContentsHeading,
  ContentsWrapper,
  HeadingImage,
  Wrapper,
} from './style';

export const ShareGotem: React.FC = () => {
  const { active } = useProgress();

  return (
    <Layout>
      <Wrapper>
        <CanvasWrapper isActive={active}>
          <HeadingImage isActive={active}>
            <img src="/aj-alchemy/svg/decoration_text-gotem.svg" alt="GOT'EM" />
          </HeadingImage>
          <Canvas flat>
            <Stage>
              <PerspectiveCamera makeDefault position={[-2, 0, 3]} />
              <Aj1Model />
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
      </Wrapper>
    </Layout>
  );
};
