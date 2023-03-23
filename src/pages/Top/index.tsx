import type React from 'react';
import { EditorWrapper, Wrapper } from './style';
import { Layout } from '@src/components';
import { MaterialColorEditor } from '@src/features/MaterialColorEditor';
import { EditModelCanvas } from '@src/features/EditModelCanvas';
import { MaterialColorResetButton } from '@src/features/MaterialColorResetButton';
import { MaterialColorPreset } from '@src/features/MaterialColorPreset';
import { SaveImageModal } from '@src/features/Modals/SaveImageModal';
import { TopLayout } from '@src/components/Layout/TopLayout';

export const Top: React.FC = () => {
  return (
    <TopLayout
      editorChildren={
        <EditorWrapper>
          <SaveImageModal />
          <MaterialColorResetButton />
          <MaterialColorEditor />
          <MaterialColorPreset />
        </EditorWrapper>
      }
    >
      <Wrapper>
        <EditModelCanvas />
      </Wrapper>
    </TopLayout>
  );
};
