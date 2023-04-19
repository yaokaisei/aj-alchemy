import type React from 'react';
import { ColorPalletButton, ColorPicker } from '@src/components';
import { useCurrentMaterialName } from '@src/stores/currentMaterialNameState';
import { useMaterial } from '@src/stores/materialState';
import { useShowMaterialColorPickerState } from '@src/stores/showMaterialColorPickerState';
import { ColorPalletButtons, CustomArea, ShowWrapper } from './style';

/**
 * マテリアルカラー編集機能
 */
export const MaterialColorEditor: React.FC = () => {
  const { materials, setMaterialColor, getMaterialColor } = useMaterial();
  const { currentMaterialName, setCurrentMaterialName } =
    useCurrentMaterialName();
  const { showMaterialColorPicker, setShowMaterialColorPicker } =
    useShowMaterialColorPickerState();

  return (
    <CustomArea>
      {/* TODO：floating uiで実装する */}
      <ShowWrapper isShow={showMaterialColorPicker}>
        <ColorPicker
          color={getMaterialColor(currentMaterialName)}
          presetColors={[]}
          onChange={(newColor: string) => {
            setMaterialColor({ name: currentMaterialName, color: newColor });
          }}
        />
      </ShowWrapper>

      <ColorPalletButtons>
        {materials.map(({ name, color }, index) => (
          <ColorPalletButton
            key={index}
            label={name}
            color={color}
            active={showMaterialColorPicker && currentMaterialName === name}
            onClick={() => {
              setCurrentMaterialName(name);
              setShowMaterialColorPicker(true);

              if (currentMaterialName === name) {
                setCurrentMaterialName('');
                setShowMaterialColorPicker(false);
              }
            }}
          />
        ))}
      </ColorPalletButtons>
    </CustomArea>
  );
};
