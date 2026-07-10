import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * Use this in every component instead of template literals.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
