import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';
import { type MaterialName } from '@src/types/material';

/* =======================================
 * Atom
 ======================================= */
const currentMaterialNameState = atom<MaterialName>({
  key: 'currentMaterialNameState',
  default: '',
});

/* =======================================
 * Hooks
 ======================================= */
interface Result {
  currentMaterialName: MaterialName;
  setCurrentMaterialName: SetterOrUpdater<MaterialName>;
}

export const useCurrentMaterialName = (): Result => {
  const [currentMaterialName, setCurrentMaterialName] =
    useRecoilState<MaterialName>(currentMaterialNameState);

  return {
    currentMaterialName,
    setCurrentMaterialName,
  };
};
