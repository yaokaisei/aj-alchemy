import type React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 60px; // TODO: 仮なので調整する
  display: flex;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px; // TODO: 仮なので調整する
  z-index: 2;

  a {
    color: #fff;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <small>
        <a
          href="https://twitter.com/pepelon_dev"
          target="_blank"
          rel="noreferrer"
        >
          Created by Kaisei
        </a>
      </small>
    </FooterWrapper>
  );
};
