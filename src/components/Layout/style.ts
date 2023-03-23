import styled from '@emotion/styled';

/*
 * 仮組のスタイルなので全体的に見直す
 */
const FIXED_MIN_HEIGHT = '60px';

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    #232323,
    #121212
  ); /* TODO: テーマで管理する */
  position: relative;
  color: #b3b3b3; /* TODO: テーマで管理する */
`;

export const Main = styled.main`
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 100px 0 ${FIXED_MIN_HEIGHT};
  z-index: 1;
`;

export const TopLayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 160px);
  @media (max-width: 420px) {
    flex-flow: wrap-reverse;
    height: calc(100svh - 60px);
    margin-top: -100px;
  }
`;

export const EditorChildrenWrapper = styled.div`
  width: min(30%, 620px);
  overflow: auto;
  padding: 0 20px;
  @media (max-width: 420px) {
    width: 100%;
    height: 30%;
  }
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  flex: auto;
  width: 70%;
  height: 100%;
  @media (max-width: 420px) {
    width: 100%;
    height: 70%;
  }
`;
