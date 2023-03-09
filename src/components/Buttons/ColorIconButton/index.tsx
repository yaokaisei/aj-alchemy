import type React from 'react';
import { StyledButton } from './style';

export interface ColorIconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /* カラーコード */
  color: string;
}

export const ColorIconButton: React.FC<ColorIconButtonProps> = ({
  color,
  ...props
}) => {
  return (
    <StyledButton {...props} color={color}>
      {color}
    </StyledButton>
  );
};
