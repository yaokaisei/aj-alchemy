import type React from 'react';
import { TopLayout } from '@src/components/Layout/TopLayout';
import { EditModelCanvas } from '@src/features/EditModelCanvas';
import { MaterialColorEditor } from '@src/features/MaterialColorEditor';
import { MaterialColorPreset } from '@src/features/MaterialColorPreset';
import { MaterialColorResetButton } from '@src/features/MaterialColorResetButton';
import { SaveImageModal } from '@src/features/Modals/SaveImageModal';
import { EditorWrapper, Wrapper } from './style';

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
