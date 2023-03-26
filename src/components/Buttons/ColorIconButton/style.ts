import type { ColorIconButtonProps } from '.';
import styled from '@emotion/styled';

export const StyledButton = styled.button<ColorIconButtonProps>`
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: ${({ color }) => color};
  border: 0;
  border-radius: 50%;
`;
