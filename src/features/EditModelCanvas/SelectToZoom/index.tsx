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
  const bounds = useBounds();
  const { currentMaterialName, setCurrentMaterialName } =
    useCurrentMaterialName();
  const { setShowMaterialColorPicker } = useShowMaterialColorPickerState();

  useEffect(() => {
    if (currentMaterialName === '') {
      bounds.refresh().fit();
    }
  }, [currentMaterialName, bounds]);

  const clickHandler = (e: ThreeEvent<MouseEvent>): void => {
    e.stopPropagation();

    const selectMaterialName: MaterialName = Object(e.object as Mesh).material
      .name;

    if (currentMaterialName === selectMaterialName) return;
    setCurrentMaterialName(selectMaterialName);
    setShowMaterialColorPicker(true);

    if (e.delta <= 2) {
      bounds.refresh(e.object).fit();
    }
  };

  const pointerMissedHandler = (e: MouseEvent): void => {
    e.button === 0 && bounds.refresh().fit();
    setCurrentMaterialName('');
    setShowMaterialColorPicker(false);
  };

  return (
    <group onClick={clickHandler} onPointerMissed={pointerMissedHandler}>
      {children}
    </group>
  );
};
