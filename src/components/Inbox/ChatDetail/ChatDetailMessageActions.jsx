const ChatDetailMessageActions = ({ message, currentUserId, handleActions }) => {
  return (
    <>
      {message.userId === currentUserId ? (
        <div className="absolute mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => handleActions("edit", message.messageId)}
            className="block w-full px-4 py-2 text-left text-primary-blue hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={() => handleActions("delete", message.messageId)}
            className="block w-full px-4 py-2 text-left text-indicator-red hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="absolute mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => handleActions("share", message.messageId)}
            className="block w-full px-4 py-2 text-left text-primary-blue hover:bg-gray-100"
          >
            Share
          </button>
          <button
            onClick={() => handleActions("reply", message.messageId)}
            className="block w-full px-4 py-2 text-left text-primary-blue hover:bg-gray-100"
          >
            Reply
          </button>
        </div>
      )}
    </>
  );
};

export default ChatDetailMessageActions;
