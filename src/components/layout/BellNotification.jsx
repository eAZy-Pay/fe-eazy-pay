import { useEffect, useState } from 'react';
import {
  subscribeToNotifications,
  readAllNotifications,
  readNotification,
} from '../../apis/NotificationAPI';
import { getUserSession } from '../../utils/authUtils';
import { useContext } from 'react';
import { DropdownContext } from '../../App';
import BellIcon from '../../assets/bellIcon.svg';
import NotificationBellIcon from '../../assets/notificationBellIcon.svg';

const BellNotification = () => {
  const { isDropdownOpen, setIsDropdownOpen, setDropdownContent } = useContext(DropdownContext);
  const [messages, setMessages] = useState([]);
  const user = getUserSession();
  const userId = user?.uid;

  const getBellIcon = () => {
    if (messages.length > 0) {
      return NotificationBellIcon;
    } else {
      return BellIcon;
    }
  };

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = subscribeToNotifications(userId, (newMessage) => {
      setMessages(() => {
        const updatedMessages = [];
        newMessage.map((msg) => updatedMessages.push(msg));
        return updatedMessages;
      });
    });

    return () => unsubscribe();
  }, [userId]);

  useEffect(() => {
    if (messages.length === 0) {
      setDropdownContent(
        <div className="flex flex-col w-60 items-center gap-1">
          <div className="flex items-center text-xl text-left">새로운 알림이 없습니다.</div>
        </div>
      );
    } else {
      setDropdownContent(
        <div className="flex flex-col justify-center items-center w-60 bg-white shadow-lg rounded-lg overflow-hidden gap-1">
          <div
            className="cursor-pointer flex justify-center p-3 gap-4"
            onClick={() => {
              readAllNotifications(userId);
              setMessages([]);
            }}
          >
            <div className="flex items-center text-xl text-left">전체 읽음</div>
          </div>
          {messages.map((msg, index) => (
            <div
              key={index}
              className=" w-[95%] shadow-md border-l border-r border-b border-gray-300 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                readNotification(msg.uid);
                setMessages((prev) => prev.filter((m) => m.uid !== msg.uid));
              }}
            >
              <p className="text-gray-800 text-lg">{msg.message}</p>
            </div>
          ))}
        </div>
      );
    }
  }, [messages]);

  return (
    <img
      src={getBellIcon()}
      alt="Notifications"
      className="w-8 h-8 cursor-pointer"
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen);
      }}
    />
  );
};

export default BellNotification;
