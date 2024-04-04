import type React from 'react';
import { PerspectiveCamera, useProgress, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Aj1Model, Layout } from '@src/components';
import {
  Button,
  CanvasInner,
  CanvasOuter,
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

          <CanvasOuter>
            <CanvasInner>
              <Canvas flat>
                <Stage adjustCamera={false} center={{ top: false }}>
                  <PerspectiveCamera
                    makeDefault
                    position={[-0.3, 0, 8]}
                    rotation={[0, 0, 0]}
                  />
                  <Aj1Model rotation={[0, 0.6, 0]} />
                </Stage>
              </Canvas>
            </CanvasInner>
          </CanvasOuter>
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
