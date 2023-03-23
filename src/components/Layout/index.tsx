import type React from 'react';
import { type ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main, Wrapper } from './style';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};
