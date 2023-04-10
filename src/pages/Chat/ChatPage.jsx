import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Chat from "./Chat";
import styles from "./chat.module.css";
import { serverUrl } from '../../serverUrl'

const socket = io.connect(`${serverUrl}`, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

const ChatPage = () => {
  const token = useSelector((state) => state.application.token);
  const username = useSelector((state) => state.application.login);
  const avatar = useSelector((state) => state.application.avatar);
  const room = "general";

  useEffect(() => {
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket?.emit("join_room", room);
      }
    };
    joinRoom();
  }, [username]);

  return (
    <div className={styles.chatPageWrapper}>
      {token ? (

          <div className={styles.joinChatContainer}>
            <Chat
              socket={socket}
              username={username}
              room={room}
              avatar={avatar}
            />
          </div>

      ) : (
        <div className={styles.no_auth_warning}>
          Чтобы зайти в чат, вы должны быть авторизованы!
        </div>
      )}
    </div>
  );
};

export default ChatPage;
