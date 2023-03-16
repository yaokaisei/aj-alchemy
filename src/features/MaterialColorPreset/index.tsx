import type React from 'react';
import { useMaterial } from '@src/stores/materialState';
import { presetItems } from './materialPresetList';
import { MaterialColorPresetButtons } from './style';

export const MaterialColorPreset: React.FC = () => {
  const { setMaterials } = useMaterial();

  return (
    <MaterialColorPresetButtons>
      {presetItems.map((item, index) => (
        <button
          key={`preset-${index}`}
          onClick={() => {
            setMaterials(item.preset);
          }}
        >
          {item.name}
        </button>
      ))}
    </MaterialColorPresetButtons>
  );
};
