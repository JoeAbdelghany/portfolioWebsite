import React, { useState, useEffect } from "react";
import axios from 'axios';
import io from "socket.io-client";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { Messages, Message } from '@/lib/types';
import { Icon as LogoIcon} from '../logo';
// import styles from '@/styles/layout/chat/style.module.scss';

const socket = io('http://127.0.0.1:8000', { transports: ["websocket"]});


interface Props {
  currentMessages: Messages,
}

const Chat = ({currentMessages}: Props) => {
  const user = {
    _id: '647625d8e5b38ce6619fd5bb',
  };
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>(currentMessages);
  useEffect(() => { socketInitializer() }, []);

  const socketInitializer = async () => {
    socket.on("message", (msg) => msg.userId === user._id || !msg.userId? setMessages((currentMsg) => [ ...currentMsg, msg]): null);
  };
  const sendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const msg = message.trim() ? {userId: user._id,content: message.trim(),status: 'user',type:'text'}: null;
    if (msg) {
      socket.emit('sendMessage', msg);
      await axios.post(`${process.env.API_KEY}/api/messages`, msg);
      setMessages((currentMsgs) => [ ...currentMsgs, msg]);
      setMessage('');
    }
  }

  return (
    <nav className="rounded-lg bg-lc fixed bottom-16 left-16 w-80 shadow">
      <div className="flex items-center justify-between border-b border-gray-200 p-2 h-16">
        <div className="flex gap-2">
          <LogoIcon />
          <div>
            <h6 className="text-sm text-dc">Joe Abdelghany</h6>
            <span className="text-xs">Connected now</span>
          </div>
        </div>
        <div className="rounded-full hover:bg-gray-200 p-1"> <BsThreeDotsVertical className="text-mc"/> </div>
      </div>
      <div>
        <div>
          <ul className="chat-box h-80 p-2 overflow-y-scroll">
            {messages.map( msg => {
              const {status, content} = msg;
              return status === 'admin' ? (
                <li className="w-full mb-2 pl-8 flex gap-2 justify-end" >
                  <p className="rounded text-wc bg-smc p-2 break-normal">{content}</p>
                  <LogoIcon />
                </li>
              ): (
                <li className="w-full mb-2 pr-8 flex justify-start">
                  <p className="rounded text-wc bg-mc p-2 break-words max-w-full">{content}</p>
                </li>
              );
            })}
          </ul>
          <div className="massageInput p-4">
            <form className="relative grid grid-cols-12 h-full" onSubmit={sendMessage} >
              <input
                type="text"
                name="massage"
                placeholder="New message..."
                value={message}
                id="chatInput"
                autoComplete={"off"}
                spellCheck="false"
                className="h-full p-2 rounded-none rounded-l border-2 col-span-10"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="bg-mc text-wc rounded-r h-full center col-span-2" >
                <IoMdSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Chat;