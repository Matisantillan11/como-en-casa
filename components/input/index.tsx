import { InputProps } from './types';

export default function Input({ ...props }: InputProps) {
  return <input {...props} className="glass-md text-black outline-none rounded-full px-4 py-2" />;
}
