import type React from 'react';
import { type ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ChildrenWrapper, EditorChildrenWrapper, Main, Wrapper } from './style';

interface LayoutProps {
  children: ReactNode;
  editorChildren?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ editorChildren, children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        {Boolean(editorChildren) && (
          <EditorChildrenWrapper>{editorChildren}</EditorChildrenWrapper>
        )}

        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Main>
      <Footer />
    </Wrapper>
  );
};
