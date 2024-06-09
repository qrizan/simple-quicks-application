const ChatDetailMessageInput = ({ newMessage, handleMessageChange, handleSubmit }) => {
  return (
    <div className="inset-x-0 bottom-0">
      <div className="flex items-center justify-between space-x-3 mt-2">
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type a new message..."
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatDetailMessageInput;
