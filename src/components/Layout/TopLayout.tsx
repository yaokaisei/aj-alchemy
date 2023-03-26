import type React from 'react';
import type { ReactNode } from 'react';
import {
  ChildrenWrapper,
  EditorChildrenWrapper,
  TopLayoutWrapper,
} from './style';
import { Layout } from '.';

interface LayoutProps {
  children: ReactNode;
  editorChildren?: ReactNode;
}

export const TopLayout: React.FC<LayoutProps> = ({
  children,
  editorChildren,
}) => {
  return (
    <Layout>
      <TopLayoutWrapper>
        {Boolean(editorChildren) && (
          <EditorChildrenWrapper>{editorChildren}</EditorChildrenWrapper>
        )}

        <ChildrenWrapper>{children}</ChildrenWrapper>
      </TopLayoutWrapper>
    </Layout>
  );
};
