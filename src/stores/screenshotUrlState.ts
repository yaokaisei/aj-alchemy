import { atom, useRecoilState, type SetterOrUpdater } from 'recoil';

/* =======================================
 * Atom
 ======================================= */
const screenshotUrlState = atom({
  key: 'screenshotUrlState',
  default: '',
});

/* =======================================
 * Hooks
 ======================================= */
interface UseScreenshotUrl {
  /** スクリーンショットとして保存するURL */
  screenshotUrl: string;
  /** スクリーンショットとして保存するURLを更新する */
  setScreenshotUrl: SetterOrUpdater<string>;
}

export const useScreenshotUrl = (): UseScreenshotUrl => {
  const [screenshotUrl, setScreenshotUrl] = useRecoilState(screenshotUrlState);

  return {
    screenshotUrl,
    setScreenshotUrl,
  };
};
