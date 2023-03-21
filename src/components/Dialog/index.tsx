import type React from 'react';
import { useEffect, useRef } from 'react';
import { StyledDialog, StyledDialogInner } from './styled';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
}): React.ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement == null) return;

    if (isOpen) {
      if (dialogElement.hasAttribute('open')) return;
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute('open')) return;
      dialogElement.close();
    }
  }, [isOpen]);

  return (
    <StyledDialog ref={dialogRef} onClick={onClose}>
      <StyledDialogInner
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </StyledDialogInner>
    </StyledDialog>
  );
};
