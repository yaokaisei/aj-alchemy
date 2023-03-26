import type React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 100px; // TODO: 仮なので調整する
  display: flex;
  align-items: center;
  padding: 0 20px; // TODO: 仮なので調整する
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const HeaderLogo = styled.h1`
  margin: 0;

  img {
    aspect-ratio: 87/37;
    width: clamp(
      7.5rem,
      5.0893rem + 12.0536vw,
      10.875rem
    ); // TODO: 仮なので調整する
  }
`;

const HeaderContents = styled.div`
  display: flex;
  gap: 16px;
`;

// TODO: 仮実装
const styleLinkButton = css`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-color: #b3b3b3;
  min-width: 180px;
  text-align: center;
  padding: 12px 20px;
  border-radius: 50vw;
  background: linear-gradient(145deg, #252525, #202020);
  box-shadow: 5px 5px 10px #171717, -5px -5px 10px #2f2f2f;
  transition: box-shadow 0.3s ease-in-out;
  border: 0;
  &:hover {
    box-shadow: 10px 10px 20px #151515, -10px -10px 20px #313131;
  }
`;
const StyledLink = styled(Link)`
  ${styleLinkButton}
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/aj-alchemy">
          <img src="/aj-alchemy/svg/logo.svg" alt="AIR JORDAN Alchemy" />
        </Link>
      </HeaderLogo>

      <HeaderContents>
        <StyledLink to="./share">GOT’EM SHARE</StyledLink>
      </HeaderContents>
    </HeaderWrapper>
  );
};
