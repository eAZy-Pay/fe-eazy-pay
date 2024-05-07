import { useEffect, useState } from 'react';
import { subscribeToNotifications } from '../../apis/NotificationAPI';
import { getUserSession } from '../../utils/authUtils';

const NotificationContent = () => {
  const [messages, setMessages] = useState([]);
  const user = getUserSession();
  const userId = user?.uid;

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = subscribeToNotifications(userId, (newMessage) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        newMessage.map((msg) => updatedMessages.push(msg));
        return updatedMessages;
      });
    });

    return () => unsubscribe(); // 컴포넌트 언마운트시 연결 종료
  }, [userId]);

  return (
    <div className="flex flex-col items-center gap-1">
      {messages.map((msg, index) => (
        <div key={index} className="border-l border-r border-b border-gray-300 p-2">
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationContent;
