import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string;
  unread?: number;
  active?: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Alice Johnson",
    lastMessage: "Hey! How are you doing?",
    time: "10:30 AM",
    avatar: "",
    unread: 2,
    active: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    lastMessage: "Let's catch up later!",
    time: "9:15 AM",
    avatar: "",
  },
  {
    id: "3",
    name: "Carol Williams",
    lastMessage: "Thanks for your help!",
    time: "Yesterday",
    avatar: "",
  },
  {
    id: "4",
    name: "David Brown",
    lastMessage: "See you tomorrow!",
    time: "Yesterday",
    avatar: "",
  },
];

export const ConversationList = () => {
  return (
    <div className="h-full flex flex-col border-r border-border bg-card">
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-semibold">Chats</h2>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-border">
          {mockConversations.map((conversation) => (
            <button
              key={conversation.id}
              className={cn(
                "w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left",
                conversation.active && "bg-muted"
              )}
            >
              <Avatar>
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {conversation.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  {conversation.unread && (
                    <span className="ml-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
