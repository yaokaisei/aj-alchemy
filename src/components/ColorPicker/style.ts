import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #ededed; /* TODO: テーマで管理する */
  padding: 16px;
  border-radius: 16px;
  display: grid;
  gap: 16px;

  input {
    width: 100%;
    padding: 0;
    border: 0px;
    border-radius: 8px;
    padding: 5px 10px;
    color: #1c1c1c; /* TODO: テーマで管理する */
  }

  .react-colorful {
    width: 100%;
    height: 160px;
  }
`;

export const StylePresetColors = styled.ul`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;
