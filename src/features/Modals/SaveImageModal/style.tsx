import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 50% 1fr;

  // TODO: 仮実装
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
