import type React from 'react';
import { PRESET_DEFAULT } from '@src/config/materialPreset';
import { useMaterial } from '@src/stores/materialState';

export const MaterialColorResetButton: React.FC = () => {
  const { setMaterials } = useMaterial();

  /**
   * デフォルトプリセットにステートを更新してから
   * materialStateのローカルストレージを削除する
   */
  const resetMaterialState = async () => {
    await setMaterials(PRESET_DEFAULT);
    localStorage.removeItem('material-state');
  };

  return <button onClick={resetMaterialState}>デフォルトに戻す</button>;
};
