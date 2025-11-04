import { ConversationList } from "@/components/chat/ConversationList";
import { ChatView } from "@/components/chat/ChatView";

const Chat = () => {
  return (
    <div className="h-screen flex">
      <div className="w-full md:w-80 lg:w-96">
        <ConversationList />
      </div>
      <div className="hidden md:flex flex-1">
        <ChatView />
      </div>
    </div>
  );
};

export default Chat;
