export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  message: string;
  description?: string;
  duration?: number;
  position?: ToastPosition;
  type?: ToastType;
}

export interface ToastState {
  id: string;
  options: ToastOptions;
  visible: boolean;
}