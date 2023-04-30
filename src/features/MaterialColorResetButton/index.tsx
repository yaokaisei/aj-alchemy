import type React from 'react';
import { PRESET_DEFAULT } from '@src/config/materialPreset';
import { useMaterial } from '@src/stores/materialState';

export const MaterialColorResetButton: React.FC = () => {
  const { setMaterials } = useMaterial();

  /**
   * デフォルトプリセットにステートを更新してから
   * materialStateのローカルストレージを削除する
   */
  const resetMaterialState = (): void => {
    Promise.resolve()
      .then(() => {
        setMaterials(PRESET_DEFAULT);
        localStorage.removeItem('material-state');
      })
      .catch((error) => {
        console.error('resetMaterialState error:', error);
      });
  };

  return <button onClick={resetMaterialState}>デフォルトに戻す</button>;
};
