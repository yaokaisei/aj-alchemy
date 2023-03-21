import styled from '@emotion/styled';

export const StyledDialog = styled.dialog`
  width: calc(100% - 40px);
  max-width: 1200px;
  border: 0;
  border-radius: 20px;
  padding: 0;
  &::backdrop {
    backdrop-filter: blur(10px);
  }
`;

export const StyledDialogInner = styled.div`
  padding: 32px;
  overflow: hidden;
`;
