import type React from 'react';
import { Wrapper } from './style';
import { MaterialColorEditor } from '@src/features/MaterialColorEditor';

export const Top: React.FC = () => {
  return (
    <Wrapper>
      <MaterialColorEditor />
    </Wrapper>
  );
};
