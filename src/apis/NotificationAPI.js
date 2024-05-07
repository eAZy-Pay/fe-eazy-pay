const BASE_URL = import.meta.env.VITE_BASE_URL;

export const subscribeToNotifications = (userId, onMessage) => {
  let eventSource;
  let isReconnecting = false;

  const connect = () => {
    if (isReconnecting) return;
    isReconnecting = true;
    eventSource = new EventSource(`${BASE_URL}/subscribe/${userId}`);

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      onMessage(newMessage);
    };

    eventSource.onerror = () => {
      eventSource.close();
      isReconnecting = false;
      setTimeout(connect, 5000);
    };
  };

  connect();

  return () => {
    if (eventSource) {
      eventSource.close();
    }
    isReconnecting = false;
  };
};

export const readAllNotifications = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/notifications/readAll/${userId}`, {
    method: 'PUT',
  });
  return response.json();
};

export const readNotification = async (notificationId) => {
  const response = await fetch(`${BASE_URL}/api/notifications/read/${notificationId}`, {
    method: 'PUT',
  });
  return response.json();
};
