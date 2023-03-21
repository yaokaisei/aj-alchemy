import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const CanvasWrapper = styled.div`
  width: 1200px;
  height: 1200px;
  visibility: hidden;
  position: fixed;
  top: -100%;
`;

export const ContentsWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 16px;
`;
