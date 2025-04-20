import Notification, { INotifications } from '.';

type NotificationType = 'error' | 'success' | 'alert';

export const renderArrayNotifications = (
  type: NotificationType,
  messages: string[],
  options: INotifications
) => {
  const prepareFunc = {
    error: Notification.error,
    success: Notification.success,
    alert: Notification.alert,
  };

  const render = prepareFunc[type] || null;

  messages.forEach((message) => render(message, options));
};
