import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';

/* =======================================
 * Atom
 ======================================= */
const shareImageBgColorState = atom({
  key: 'shareImageBgColorState',
  default: '',
});

/* =======================================
 * Hooks
 ======================================= */
interface Result {
  shareImageBgColor: string;
  setShareImageBgColor: SetterOrUpdater<string>;
}

export const useShareImageBgColor = (): Result => {
  const [shareImageBgColor, setShareImageBgColor] = useRecoilState(
    shareImageBgColorState,
  );

  return {
    shareImageBgColor,
    setShareImageBgColor,
  };
};
