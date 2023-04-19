/* eslint-disable react/no-unknown-property */
import type { ThreeEvent } from '@react-three/fiber';
import type React from 'react';
import type { Mesh } from 'three';
import { useBounds } from '@react-three/drei';
import { useEffect } from 'react';
import { useCurrentMaterialName } from '@src/stores/currentMaterialNameState';
import { useShowMaterialColorPickerState } from '@src/stores/showMaterialColorPickerState';
import { type MaterialName } from '@src/types/material';

interface SelectToZoomProps {
  children: React.ReactNode;
}

export const SelectToZoom: React.FC<SelectToZoomProps> = ({ children }) => {
  const { currentMaterialName, setCurrentMaterialName } =
    useCurrentMaterialName();
  const { setShowMaterialColorPicker } = useShowMaterialColorPickerState();

  const api = useBounds();

  // TODO: GlobalStateの参照をしないようにする
  useEffect(() => {
    if (currentMaterialName === '') {
      api.refresh().fit();
    }
  }, [currentMaterialName, api]);

  const clickHandler = (e: ThreeEvent<MouseEvent>): void => {
    e.stopPropagation();

    const selectMaterialName: MaterialName = Object(e.object as Mesh).material
      .name;

    if (currentMaterialName === selectMaterialName) return;
    // TODO: propsでモデル箇所をクリックした時のイベントを実行できるようにする
    // TODO: GlobalStateの更新はfeatureでおこなえるようにする
    setCurrentMaterialName(selectMaterialName);
    setShowMaterialColorPicker(true);

    if (e.delta <= 10) {
      api.refresh(e.object).fit();
    }
  };

  const pointerMissedHandler = (e: MouseEvent): void => {
    e.button === 0 && api.refresh().fit();
    // TODO: propsでモデル以外の箇所をクリックした時のイベントを実行できるようにする
    // TODO: GlobalStateの更新はfeatureでおこなえるようにする
    setCurrentMaterialName('');
    setShowMaterialColorPicker(false);
  };

  return (
    <group onClick={clickHandler} onPointerMissed={pointerMissedHandler}>
      {children}
    </group>
  );
};
