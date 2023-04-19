import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';

/* =======================================
 * Atom
 ======================================= */
const showMaterialColorPickerState = atom({
  key: 'showMaterialColorPickerState',
  default: false,
});

/* =======================================
 * Hooks
 ======================================= */
interface Result {
  showMaterialColorPicker: boolean;
  setShowMaterialColorPicker: SetterOrUpdater<boolean>;
}

export const useShowMaterialColorPickerState = (): Result => {
  const [showMaterialColorPicker, setShowMaterialColorPicker] = useRecoilState(
    showMaterialColorPickerState,
  );

  return {
    showMaterialColorPicker,
    setShowMaterialColorPicker,
  };
};
