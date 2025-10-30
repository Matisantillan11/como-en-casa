'use client';

import { DialogContent, Dialog as DialogCore, DialogHeader, DialogTitle } from './core-component';

export default function Dialog({
  open,
  onOpenChange,
  className,
  children,
  asPopup,
  title,
  showCloseButton = true,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  asPopup?: boolean;
  title?: string;
  showCloseButton?: boolean;
}) {
  return (
    <DialogCore open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className} asPopup={asPopup} showCloseButton={showCloseButton}>
        <DialogHeader>
          {title ? <DialogTitle>{title}</DialogTitle> : null}
          {children}
        </DialogHeader>
      </DialogContent>
    </DialogCore>
  );
}
