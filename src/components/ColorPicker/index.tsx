import type React from 'react';
import { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { type ColorPickerBaseProps } from 'react-colorful/dist/types';
import { ColorIconButton } from '@src/components';
import { StylePresetColors, Wrapper } from './style';

interface ColorPickerProps extends ColorPickerBaseProps<string> {
  presetColors?: string[];
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  presetColors = [],
  ...props
}) => {
  const [presetColorsState, setPresetColorsState] =
    useState<string[]>(presetColors);

  const addPresetColor = (): void => {
    // NOTE: 重複した場合はプリセットカラーを追加しないように早期リターン
    if (presetColorsState.some((color) => color === props.color)) return;
    setPresetColorsState(presetColorsState.concat(props.color));
  };

  return (
    <Wrapper>
      <HexColorPicker color={props.color} onChange={props.onChange} />
      <HexColorInput color={props.color} onChange={props.onChange} />

      <>
        {presetColorsState.length !== 0 && (
          <StylePresetColors>
            {presetColorsState.map((color, index) => (
              <li key={index}>
                <ColorIconButton
                  color={color}
                  onClick={() => {
                    props.onChange(color);
                  }}
                />
              </li>
            ))}
          </StylePresetColors>
        )}

        <button onClick={addPresetColor}>色追加</button>
      </>
    </Wrapper>
  );
};
