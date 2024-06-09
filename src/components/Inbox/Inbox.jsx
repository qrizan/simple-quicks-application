import { useState } from "react";
import ChatDetail from "./ChatDetail/ChatDetail";
import SearchBar from "./SearchBar";
import ChatMessage from "./ChatMessage/ChatMessage";

const Inbox = () => {
  const [popupContent, setPopupContent] = useState(null);

  const initialMessages = [
    {
      id: 1,
      sender: "Alice",
      title: "109220-Naturalization",
      content:
        "Hi there! Let's discuss the agenda for our upcoming meeting and finalize the action items.",
      time: "2024-06-05T10:00:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 2,
      sender: "Bob",
      title: "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
      content:
        "Hello! I've made significant progress on the project. Let's catch up on the latest developments.",
      time: "2024-06-05T10:15:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 3,
      sender: "Alice",
      title: "8405-Diana SALAZAR MUNGUIA",
      content: "How are you? Do you have any updates on the tasks assigned to you?",
      time: "2024-06-05T10:30:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 4,
      sender: "Bob",
      title: "FastVisa Support",
      content: "I'm good, thanks! Your feedback on the latest draft would be highly appreciated.",
      time: "2024-06-05T10:45:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 5,
      sender: "Alice",
      title: "Next Steps",
      content:
        "Do you have time to chat later? I'd like to discuss our next steps and plan for the upcoming week.",
      time: "2024-06-05T11:00:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 6,
      sender: "Bob",
      title: "Planning",
      content:
        "Sure, I'll be available in the evening. Let's schedule a meeting to discuss our project planning in detail.",
      time: "2024-06-05T11:15:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 7,
      sender: "Charlie",
      title: "Lunch",
      content: "Hey, would you like to grab lunch together today?",
      time: "2024-06-05T11:30:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 8,
      sender: "Dana",
      title: "Workshop",
      content: "Don't forget about the workshop this afternoon. See you there!",
      time: "2024-06-05T11:45:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 9,
      sender: "Alice",
      title: "Reminder",
      content: "Just a reminder about the team meeting tomorrow morning.",
      time: "2024-06-05T12:00:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 10,
      sender: "Bob",
      title: "Question",
      content: "Do you have the latest figures for the sales report?",
      time: "2024-06-05T12:15:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 11,
      sender: "Charlie",
      title: "Code Review",
      content: "Can you review my latest code changes when you have a moment?",
      time: "2024-06-05T12:30:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 12,
      sender: "Dana",
      title: "Team Outing",
      content: "Are you joining the team outing next week?",
      time: "2024-06-05T12:45:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 13,
      sender: "Alice",
      title: "Document",
      content: "Please review the attached document and provide your feedback.",
      time: "2024-06-05T13:00:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 14,
      sender: "Bob",
      title: "Call",
      content: "Can we have a quick call to discuss the project details?",
      time: "2024-06-05T13:15:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 15,
      sender: "Charlie",
      title: "Follow Up",
      content: "Following up on our previous conversation. Any updates?",
      time: "2024-06-05T13:30:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 16,
      sender: "Dana",
      title: "Budget",
      content: "We need to finalize the budget for the next quarter.",
      time: "2024-06-05T13:45:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 17,
      sender: "Alice",
      title: "Schedule",
      content: "Can you share your availability for the next week?",
      time: "2024-06-05T14:00:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 18,
      sender: "Bob",
      title: "Meeting Notes",
      content: "Here are the notes from our last meeting. Please review.",
      time: "2024-06-05T14:15:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 19,
      sender: "Charlie",
      title: "Event",
      content: "Are you attending the event tomorrow?",
      time: "2024-06-05T14:30:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
    {
      id: 20,
      sender: "Dana",
      title: "Feedback Request",
      content: "Can you provide feedback on the new design?",
      time: "2024-06-05T14:45:00",
      newMessage: Math.random() < 0.5 ? true : false,
      participants: Math.floor(Math.random() * 7) + 2,
    },
  ];

  const handleChatClick = (chatId) => {
    setPopupContent(<ChatDetail chatId={chatId} onBack={() => setPopupContent(null)} />);
  };

  return (
    <div className="flex flex-col h-full">
      <SearchBar />

      <div className="overflow-y-scroll scroll-smooth scrollbar-custom popup-content">
        {initialMessages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            messages={initialMessages}
            index={index}
            handleChatClick={handleChatClick}
          />
        ))}
      </div>
      {popupContent && (
        <div
          className="
            fixed bottom-20 
            right-5 bg-white 
            text-gray-700 rounded-lg 
            p-4 flex flex-col 
            popup"
        >
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default Inbox;
