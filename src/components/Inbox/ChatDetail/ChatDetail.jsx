import { useState, useRef } from "react";

import ChatDetailHeader from "./ChatDetailHeader";
import ChatDetailMessage from "./ChatDetailMessage";
import ChatDetailMessageNotification from "./ChatDetailMessageNotification";
import ChatDetailLoader from "./ChatDetailLoader";
import ChatDetailMessageInput from "./ChatDetailMessageInput";
import ChatDetailDivider from "./ChatDetailDivider";

const ChatDetail = ({ chatId, onBack }) => {
  console.log("chatId :", chatId);
  const initialChat = [
    {
      title: "I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
      users: 3,
    },
    [
      {
        messageId: "c7e3b19a-82b5-4b97-987d-d9b8276c1f99",
        userId: 1,
        sender: "Mary Hilda",
        content:
          "Hi team! Just wanted to check in on the progress of the project application. How's everything coming along?",
        date: "2022-06-01T09:00:00",
        colorUser: "#E5A443",
        colorMessage: "#FCEED3",
        isNewMessage: false,
      },
      {
        messageId: "bf26f12b-3df8-4e3e-85a2-8a2f57a57e1b",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content:
          "Hi Mary, Hi Bob! I've been working on integrating the API for the project application. It's nearly complete. I just need to run a few more tests.",
        date: "2022-06-01T09:10:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: false,
      },
      {
        messageId: "5fcde77b-0825-4e2a-b50d-0ec7d37f0cd5",
        userId: 2,
        sender: "You",
        content:
          "Hey Mary! The application is progressing well. We’ve completed the login module and are now working on the dashboard. How about the UI/UX updates?",
        date: "2022-06-02T09:05:00",
        colorUser: "#9B51E0",
        colorMessage: "#EEDCFF",
        isNewMessage: false,
      },
      {
        messageId: "1e9f3cb4-6b2f-4a25-926e-567ca1c2db6f",
        userId: 2,
        sender: "You",
        content:
          "Looking forward to seeing the mockups, Mary. Obaidullah, once you're done with the API tests, let me know if you need any help with integration.",
        date: "2022-06-02T09:20:00",
        colorUser: "#9B51E0",
        colorMessage: "#EEDCFF",
        isNewMessage: false,
      },
      {
        messageId: "0e3a9c4d-fd69-4b2e-9174-8f0d531dca95",
        userId: 1,
        sender: "Mary Hilda",
        content:
          "Great to hear! The UI/UX updates are almost done. I've added some new features and polished the overall design. I'll send the mockups soon.",
        date: "2022-06-03T09:15:00",
        colorUser: "#E5A443",
        colorMessage: "#FCEED3",
        isNewMessage: false,
      },
      {
        messageId: "bdb1a2c9-57a0-47db-b309-b13a2b4a4b7e",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content:
          "Will do, Bob. I'll keep you posted. Mary, the new UI/UX features sound exciting! Can't wait to see them in action.",
        date: "2022-06-03T09:25:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: false,
      },
      {
        messageId: "74ef4a67-7a5d-47d8-9533-d4c3140b39e2",
        userId: 2,
        sender: "You",
        content:
          "Sounds like a plan. I'll coordinate with the team to ensure we’re on track for the demo. Thanks, everyone!",
        date: "2022-06-04T09:35:00",
        colorUser: "#9B51E0",
        colorMessage: "#EEDCFF",
        isNewMessage: false,
      },
      {
        messageId: "6d93351a-2658-4b4b-9260-2f26c4cbe43e",
        userId: 1,
        sender: "Mary Hilda",
        content:
          "Thanks, Obaidullah! I'll make sure to share the designs by end of the day. Let's aim to have a demo ready by next week.",
        date: "2022-06-04T09:30:00",
        colorUser: "#E5A443",
        colorMessage: "#FCEED3",
        isNewMessage: false,
      },
      {
        messageId: "8b3d0a11-51fa-4f85-a66e-4d1f17f72849",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content: "Perfect. Let’s do our best to make the demo a success!",
        date: "2022-06-05T09:40:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: false,
      },
      {
        messageId: "f894a0b7-4c4a-4ad8-9f29-1d56efdb8c8d",
        userId: 1,
        sender: "Mary Hilda",
        content: "Just sent the mockups!",
        date: "2022-06-05T09:45:00",
        colorUser: "#E5A443",
        colorMessage: "#FCEED3",
        isNewMessage: false,
      },
      {
        messageId: "a4bbf66c-5e4f-4e6d-b4a4-4f7ec4f39cf2",
        userId: 2,
        sender: "You",
        content: "Got them, Mary. Reviewing now.",
        date: "2022-06-06T09:50:00",
        colorUser: "#9B51E0",
        colorMessage: "#EEDCFF",
        isNewMessage: false,
      },
      {
        messageId: "d82a6a25-4d88-49f8-9a47-c41c55c88ff2",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content: "Looks good!",
        date: "2022-06-06T09:55:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: false,
      },
      {
        messageId: "bdb1a2c9-57a0-47db-b309-b13a2b44327e",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content: "Morning. I'll try to do them. Thanks",
        date: "2022-08-03T19:32:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: true,
      },
      {
        messageId: "bdb1a2c9-57a0-47db-b309-b13a2b443124",
        userId: 3,
        sender: "Obaidullah Amarkhil",
        content: "Morning. test test test",
        date: "2022-08-03T20:32:00",
        colorUser: "#43B78D",
        colorMessage: "#D2F2EA",
        isNewMessage: true,
      },
    ],
  ];

  const currentUserId = 2;
  const metadata = initialChat[0];
  const chatMessages = initialChat[1];
  const title = metadata.title;
  const numberOfUsers = metadata.users;
  const containerRef = useRef(null);

  const [newMessage, setNewMessage] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [loadingNewMessage, setLoadingNewMessage] = useState(false);
  const [loadingNewMessageButton, setLoadingNewMessageButton] = useState(false);
  const [newMessageNotification, setNewMessageNotification] = useState(true);

  const handleDropdownToggle = (messageId) => {
    setDropdownVisible(dropdownVisible === messageId ? null : messageId);
  };

  const handleActions = (type, messageId) => {
    console.log(`type: ${type}`);
    console.log(`messageId: ${messageId}`);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMesssageNotification = (show) => {
    setLoadingNewMessageButton(true);
    setTimeout(function () {
      setNewMessageNotification(show);
      setLoadingNewMessageButton(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setLoadingNewMessage(true);
    containerRef.current.scrollTop = containerRef.current.scrollHeight;

    setTimeout(function () {
      console.log("New Message:", newMessage);
      setLoadingNewMessage(false);
    }, 1000);

    setNewMessage("");
  };

  const groupedMessages = chatMessages.reduce((groups, message) => {
    const date = message.date.split("T")[0];
    const isNewMessage = message.isNewMessage ? "yes" : "no";

    const groupKey = `${date}#${isNewMessage}`;

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(message);
    return groups;
  }, {});

  return (
    <div className="flex flex-col h-full">
      <ChatDetailHeader title={title} numberOfUsers={numberOfUsers} onBack={onBack} />
      <hr className="w-full h-1 bg-[#BDBDBD]" />
      <div
        className="flex-grow overflow-y-scroll scroll-smooth scrollbar-custom popup-content"
        ref={containerRef}
      >
        {Object.keys(groupedMessages).map((groupKey, groupIndex) => (
          <div key={`${groupKey}-${groupIndex}`}>
            <ChatDetailDivider
              isNewMessage={groupKey.split("#")[1]}
              sortByDate={groupKey.split("#")[0]}
            />

            {groupedMessages[groupKey].map((message, messageIndex) => (
              <ChatDetailMessage
                key={`${message.id}-${messageIndex}`}
                message={message}
                currentUserId={currentUserId}
                handleDropdownToggle={handleDropdownToggle}
                dropdownVisible={dropdownVisible}
                handleActions={handleActions}
              />
            ))}
          </div>
        ))}

        {newMessageNotification && (
          <ChatDetailMessageNotification
            loadingNewMessageButton={loadingNewMessageButton}
            handleNewMesssageNotification={handleNewMesssageNotification}
          />
        )}

        {loadingNewMessage && <ChatDetailLoader />}
      </div>

      <div className="popup-content">
        <ChatDetailMessageInput
          newMessage={newMessage}
          handleMessageChange={handleMessageChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ChatDetail;
