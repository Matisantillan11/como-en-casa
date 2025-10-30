import { AddIcon, UserIcon } from '@/components/icons';
import Button from '../button';
import Input from '../input';

export default function Header() {
  return (
    <div className="absolute w-full h-16 z-10 px-10 top-2 left-0">
      <div className="w-full flex items-center justify-between px-10 py-2 glass">
        <div className="flex items-center gap-2">
          <p className="text-black text-xl font-bold">🧉 Como en casa</p>
        </div>

        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Search" />
          <Button>
            <AddIcon />
          </Button>
          <Button>
            <UserIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
