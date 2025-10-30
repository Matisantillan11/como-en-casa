import { ButtonProps } from './types';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="glass-md flex items-center justify-center h-10 w-10 rounded-full text-black/70 outline-none"
      {...props}>
      {children}
    </button>
  );
}
