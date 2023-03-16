import type React from 'react';
import { useMaterial } from '@src/stores/materialState';
import { PRESET_DEFAULT } from '@src/config/materialPreset';

export const MaterialColorResetButton: React.FC = () => {
  const { setMaterials } = useMaterial();

  /**
   * デフォルトプリセットにステートを更新してから
   * materialStateのローカルストレージを削除する
   */
  const resetMaterialState = (): void => {
    setTimeout(() => {
      setMaterials(PRESET_DEFAULT);
    }, 0);
    localStorage.removeItem('material-state');
  };

  return <button onClick={resetMaterialState}>デフォルトに戻す</button>;
};
