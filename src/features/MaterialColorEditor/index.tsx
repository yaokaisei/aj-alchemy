import type React from 'react';
import { useState } from 'react';

import type { MaterialName } from '@src/types/material';
import { useMaterial } from '@src/stores/materialState';
import { ColorPalletButton, ColorPicker } from '@src/components';

import { CustomArea, ToggleButtons, WrapperColorPicker } from './style';

/**
 * マテリアルカラー編集機能
 */
export const MaterialColorEditor: React.FC = () => {
  const { materials, setMaterialColor, getMaterialColor } = useMaterial();
  const [isCurrentMaterialKey, toggleCurrentMaterialKey] =
    useState<MaterialName>('Foxing');

  return (
    <WrapperColorPicker>
      <CustomArea>
        <ColorPicker
          color={getMaterialColor(isCurrentMaterialKey)}
          presetColors={[]}
          onChange={(newColor: string) => {
            setMaterialColor({ name: isCurrentMaterialKey, color: newColor });
          }}
        />

        <ToggleButtons>
          {materials.map(({ name, color }, index) => (
            <ColorPalletButton
              key={index}
              label={name}
              color={color}
              active={isCurrentMaterialKey === name}
              onClick={() => {
                toggleCurrentMaterialKey(name);
              }}
            />
          ))}
        </ToggleButtons>
      </CustomArea>
    </WrapperColorPicker>
  );
};
