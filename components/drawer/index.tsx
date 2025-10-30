import { DrawerContent, Drawer as DrawerCore, DrawerHeader, DrawerTitle } from './core-components';

export default function Drawer({
  title,
  className,
  children,
  open,
  onOpenChange,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <DrawerCore open={open} onOpenChange={onOpenChange}>
      <DrawerContent onRequestClose={() => onOpenChange(false)} className={className}>
        {title ? (
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
        ) : null}
        {children}
      </DrawerContent>
    </DrawerCore>
  );
}
