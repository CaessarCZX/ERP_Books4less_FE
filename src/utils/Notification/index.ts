import { ReactNode } from 'react';
import { toast, ToastPosition, ToastTransition, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface INotifications {
  position?: ToastPosition;
  transition?: ToastTransition;
  delay?: number;
  autoClose?: number | false;
}

const DEFAULT_POSITION: ToastPosition = 'top-right';
const DEFAULT_TRANSITION: ToastTransition = Zoom;
const DEFAULT_DELAY: number = 0;
const DEFAULT_AUTOCLOSE: number = 3000;

const showToast = (
  toastFunction: (content: ReactNode, options?: INotifications) => void,
  content: ReactNode,
  {
    position = DEFAULT_POSITION,
    transition = DEFAULT_TRANSITION,
    delay = DEFAULT_DELAY,
    autoClose = DEFAULT_AUTOCLOSE,
  }: INotifications
) => {
  toastFunction(content, { position, transition, delay, autoClose });
};

const Notification = {
  alert: (content: ReactNode, options?: INotifications) =>
    showToast(toast.info, content, options || {}),
  success: (content: ReactNode, options?: INotifications) =>
    showToast(toast.success, content, options || {}),
  error: (content: ReactNode, options?: INotifications) =>
    showToast(toast.error, content, options || {}),
};

export default Notification;
