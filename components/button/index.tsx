import { ButtonProps } from './types';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/50 border border-white/70 text-black/70 outline-none backdrop-blur-xs"
      {...props}>
      {children}
    </button>
  );
}
