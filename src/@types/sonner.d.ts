declare module 'sonner' {
  export interface ToastProps {
    message?: string;
    description?: string;
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    type?: 'success' | 'error' | 'warning' | 'info';
  }

  export function toast(message: string | ToastProps, options?: ToastProps): void;
  export function Toaster(props: any): JSX.Element;
}