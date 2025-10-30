'use client';
import { AddIcon, UserIcon } from '@/components/icons';
import { useState } from 'react';
import Button from '../button';
import Input from '../input';
import RequestStoreModal from './request-store-modal';

export default function Header() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="absolute w-full h-16 z-10 px-2 md:px-10 top-2 left-0">
      <div className="glass w-full flex items-center justify-center md:justify-between px-2 md:px-10 py-2 rounded-full">
        <div className="flex items-center gap-2">
          <p className="hidden md:block text-black text-xl font-bold">🧉 Como en casa</p>
        </div>

        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Search" />
          <Button onClick={handleOpenDialog}>
            <AddIcon />
          </Button>
          <Button>
            <UserIcon />
          </Button>
        </div>
      </div>

      <RequestStoreModal openDialog={openDialog} handleOpenDialog={handleOpenDialog} />
    </div>
  );
}
