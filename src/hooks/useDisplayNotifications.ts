import { useEffect, useState } from 'react';
import Notification from '../utils/Notification';

const useDisplayNotifications = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Mensajes a ui
  useEffect(() => {
    if (error) {
      Notification.error(error);
      setError('');
    }

    if (success) {
      Notification.success(success);
      setSuccess('');
    }
  }, [error, setError, setSuccess, success]);

  return { setError, setSuccess };
};

export default useDisplayNotifications;
