import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';

/* =======================================
 * Atom
 ======================================= */
const shareImageUrlState = atom({
  key: 'shareImageUrlState',
  default: '',
});

/* =======================================
 * Hooks
 ======================================= */
interface UseShareImageUrl {
  /** スクリーンショットとして保存するURL */
  shareImageUrl: string;
  /** スクリーンショットとして保存するURLを更新する */
  setShareImageUrl: SetterOrUpdater<string>;
}

export const useShareImageUrl = (): UseShareImageUrl => {
  const [shareImageUrl, setShareImageUrl] = useRecoilState(shareImageUrlState);

  return {
    shareImageUrl,
    setShareImageUrl,
  };
};
