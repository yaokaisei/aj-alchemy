import styled from '@emotion/styled';

const FIXED_MIN_HEIGHT = '60px'; // TODO: 仮なので調整する

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
  display: flex;
  height: 100vh;
  padding: 100px 0 ${FIXED_MIN_HEIGHT}; // TODO: 仮なので調整する
`;

export const EditorChildrenWrapper = styled.div`
  width: min(30%, 600px);
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  flex: auto;
  width: 70%;
  height: 100%;
`;
