import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ColorPalletButtonProps } from '.';

export const StyledButton = styled.button<ColorPalletButtonProps>`
  position: relative;
  min-width: 140px;
  height: 140px;
  padding: 88px 0 14px;
  border-radius: 20px;
  border: none;
  display: inline-grid;
  font-size: 16px; /* TODO: テーマで管理する */
  background-color: #ededed; /* TODO: テーマで管理する */
  place-items: center;
  transition: transform 0.3s ease-in-out;
  ${({ active }) => css`
    transform: translateY(${active ?? false ? '-8px' : '0'});
  `}
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ color }) => color};
    width: 60px;
    height: 60px;
    top: 16px;
    border-radius: 50%;
  }
`;
