import { clsx } from "/node_modules/.vite/deps/clsx.js?v=f31a5e49";
import { twMerge } from "/node_modules/.vite/deps/tailwind-merge.js?v=f31a5e49";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
