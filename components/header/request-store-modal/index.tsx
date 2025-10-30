import Dialog from '@/components/dialog';
import Drawer from '@/components/drawer';
import Input from '@/components/input';
import { useBreakpoints } from '@/hooks';

const StoreContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input type="text" placeholder="Store name" />
      <Input type="text" placeholder="Store address" />
      <Input type="number" placeholder="Store phone" />
      <Input type="text" placeholder="Store email" />
      <Input type="text" placeholder="Store website" />
      <Input type="text" placeholder="Store description" />
      <Input type="text" placeholder="Store images" />
    </div>
  );
};

export default function RequestStoreModal({
  handleOpenDialog,
  openDialog,
}: {
  handleOpenDialog: (open: boolean) => void;
  openDialog: boolean;
}) {
  const { isMobile } = useBreakpoints();
  return isMobile ? (
    <Drawer open={openDialog} onOpenChange={handleOpenDialog} title="Add Store">
      <StoreContent />
    </Drawer>
  ) : (
    <Dialog
      open={openDialog}
      onOpenChange={handleOpenDialog}
      title="Add Store"
      className="md:left-[75%] top-[35%] md:top-[38%]"
      showCloseButton={false}
      asPopup>
      <StoreContent />
    </Dialog>
  );
}
