import type React from 'react';
import { EditorWrapper } from './style';
import { Layout } from '@src/components';
import { MaterialColorEditor } from '@src/features/MaterialColorEditor';
import { EditModelCanvas } from '@src/features/EditModelCanvas';
import { MaterialColorResetButton } from '@src/features/MaterialColorResetButton';
import { MaterialColorPreset } from '@src/features/MaterialColorPreset';

export const Top: React.FC = () => {
  return (
    <Layout
      editorChildren={
        <EditorWrapper>
          <MaterialColorResetButton />
          <MaterialColorResetButton />
          <MaterialColorEditor />
          <MaterialColorPreset />
        </EditorWrapper>
      }
    >
      <EditModelCanvas />
    </Layout>
  );
};
