import { InputProps } from './types';

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-white/50 border border-white/70 text-black outline-none rounded-full px-4 py-2 backdrop-blur-xs"
    />
  );
}
