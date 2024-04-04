import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isActive?: boolean }>`
  position: relative;
  padding-top: 60svh;
`;

export const CanvasWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 60svh;
`;

export const HeadingImage = styled.h1<{ isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 0;
        `
      : css`
          animation-name: Bounce;
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0, 0, 0, 1.7);

          @keyframes Bounce {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0%);
            }
          }
        `}

  img {
    width: min(60%, 580px);
    height: 50%;
    margin: auto;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 48px 20px 20px;
  box-shadow: 0px -18px 24px rgb(0 0 0 / 30%); //TODO: 仮スタイル
  border-radius: 30px 30px 0 0;
`;

export const ContentsHeading = styled.h2`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

export const CanvasOuter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const CanvasInner = styled.div`
  width: 100%;
  height: 90%;
`;

export const Button = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 50vw;
  color: #383838;
  padding: 16px;
  font-weight: 700;
  box-shadow: -5px -5px 10px #383838, 5px 5px 10px #545454;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: -1px -1px 1px #383838, 1px 1px 1px #545454;
  }
`;
