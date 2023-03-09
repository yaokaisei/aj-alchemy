import type React from 'react';
import { StyledButton } from './style';

export interface ColorPalletButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /* ラベルテキスト */
  label?: string;
  /* カラーコード */
  color?: string;
  /* 活性状態 */
  active: boolean;
}

export const ColorPalletButton: React.FC<ColorPalletButtonProps> = ({
  label,
  color,
  active = false,
  ...props
}) => {
  return (
    <StyledButton {...props} color={color} active={active}>
      {label}
    </StyledButton>
  );
};
