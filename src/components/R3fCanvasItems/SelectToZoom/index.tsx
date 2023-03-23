/* eslint-disable react/no-unknown-property */
import { type ThreeEvent } from '@react-three/fiber';
import { useBounds } from '@react-three/drei';
import type React from 'react';
import { type Mesh } from 'three';

interface SelectToZoomProps {
  children: React.ReactNode;
  isZoom?: boolean;
}

export const SelectToZoom: React.FC<SelectToZoomProps> = ({
  children,
  isZoom = true,
}) => {
  const api = useBounds();

  const clickHandler = (e: ThreeEvent<MouseEvent>): void => {
    if (!isZoom) return;
    e.stopPropagation();

    // TODO: 選択したマテリアル名を取得して選択中のGlobalStateの値として更新できるようにする
    const selectMaterialName: string = Object(e.object as Mesh).material.name;
    console.log(selectMaterialName);

    if (e.delta <= 10) {
      void api.refresh(e.object).fit();
    }
  };

  const pointerMissedHandler = (e: MouseEvent): void => {
    if (!isZoom) return;
    e.button === 0 && api.refresh().fit();
  };

  return (
    <group onClick={clickHandler} onPointerMissed={pointerMissedHandler}>
      {children}
    </group>
  );
};
