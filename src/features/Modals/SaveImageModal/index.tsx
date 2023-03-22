import type React from 'react';
import { Dialog, ColorPicker } from '@src/components';
import { useEffect, useState } from 'react';
import { ShareImage } from '@src/features/shareImageCreater';
import { Wrapper } from './style';
import { useShareImageBgColor } from '@src/stores/shareImageBgColorState';

export const SaveImageModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { shareImageBgColor, setShareImageBgColor } = useShareImageBgColor();

  const showModalHandler = (): void => {
    setShowModal(true);
  };

  const closeModalHandler = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={showModalHandler}>画像として保存する</button>

      <Dialog isOpen={showModal} onClose={closeModalHandler}>
        <Wrapper>
          <ShareImage />
          <div>
            <h2>Share & DL</h2>
            <p>
              あなたが作成したAIR JORDANを画像として保存することができます。
              背景色をカスタマイズすることが可能です。
            </p>

            <ColorPicker
              color={shareImageBgColor}
              onChange={(newColor: string) => {
                setShareImageBgColor(newColor);
              }}
            />
          </div>
        </Wrapper>
      </Dialog>
    </>
  );
};