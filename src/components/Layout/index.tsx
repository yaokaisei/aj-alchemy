import type React from 'react';
import { type ReactNode } from 'react';
import {
  ChildrenWrapper,
  EditorChildrenWrapper,
  Footer,
  Header,
  Main,
  Wrapper,
} from './style';

interface LayoutProps {
  children: ReactNode;
  editorChildren?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ editorChildren, children }) => {
  return (
    <Wrapper>
      <Header>TODO: ヘッダー部分</Header>
      <Main>
        {Boolean(editorChildren) && (
          <EditorChildrenWrapper>{editorChildren}</EditorChildrenWrapper>
        )}

        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Main>
      <Footer>TODO: フッター部分</Footer>
    </Wrapper>
  );
};
