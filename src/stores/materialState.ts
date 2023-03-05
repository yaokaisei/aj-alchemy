import { useEffect } from 'react';
import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PRESET_DEFAULT } from '@src/config/materialPreset';
import type { MaterialName, Material } from '@src/types/material';

/* =======================================
 * Atom
 ======================================= */
// NOTE: 標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist({
  key: 'material-state',
});

const materialState = atom<Material[]>({
  key: 'materialState',
  default: PRESET_DEFAULT,
  effects_UNSTABLE: [persistAtom],
});

/* =======================================
 * Hooks
 ======================================= */
interface UseMaterial {
  materials: Material[];
  setMaterials: SetterOrUpdater<Material[]>;
  /** 指定したMaterialNameと同じオブジェクトに属しているカラーを変更する */
  setMaterialColor: ({ name, color }: Material) => void;
  /** 指定したMaterialNameと同じオブジェクトに属しているカラーを取得する */
  getMaterialColor: (name: MaterialName) => string;
}

export const useMaterial = (array?: Material[]): UseMaterial => {
  const [materials, setMaterials] = useRecoilState(materialState);

  // NOTE: 引数でセットされたマテリアル配列で初期化
  useEffect(() => {
    if (array != null) {
      setMaterials(array);
    }
  }, [array, setMaterials]);

  const setMaterialColor = ({ name, color }: Material): void => {
    // NOTE: setMaterialsを使用して引数で指定したnameとcolorでmaterialsを上書きする
    setMaterials((prevMaterials) => {
      // NOTE: 引数で指定されたnameと一致する要素を更新する
      const updatedMaterials = prevMaterials.map((material) => {
        if (material.name === name) {
          return { name, color };
        }
        return material;
      });
      return updatedMaterials;
    });
  };

  const getMaterialColor = (name: MaterialName): string => {
    const filteringMaterials = materials.filter(
      (material) => material.name === name,
    );

    const getColor = filteringMaterials.map((material) => {
      if (material.name === name) {
        return material.color;
      }
      return '';
    });

    return getColor[0];
  };

  return {
    materials,
    setMaterials,
    setMaterialColor,
    getMaterialColor,
  };
};
