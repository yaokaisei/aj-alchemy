import styled from '@emotion/styled';

export const CustomArea = styled.div`
  display: grid;
  gap: 16px;
`;

export const ColorPalletButtons = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  overflow-y: auto;
  padding: 10px 0;
  max-height: 500px; // TODO：仮
`;
