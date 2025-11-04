import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, MoreVertical, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  time: string;
  sent: boolean;
}

const mockMessages: Message[] = [
  { id: "1", text: "Hey! How are you doing?", time: "10:30 AM", sent: false },
  { id: "2", text: "I'm doing great, thanks! How about you?", time: "10:31 AM", sent: true },
  { id: "3", text: "Pretty good! Just working on some projects.", time: "10:32 AM", sent: false },
  { id: "4", text: "That's awesome! What are you working on?", time: "10:33 AM", sent: true },
  { id: "5", text: "Building a chat app with a transparent login page 😊", time: "10:34 AM", sent: false },
];

export const ChatView = () => {
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle send logic
      setMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-[hsl(var(--chat-bg))]">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary/10 text-primary">A</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Alice Johnson</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={cn("flex", msg.sent ? "justify-end" : "justify-start")}
            >
              <div className={cn("max-w-[70%] space-y-1")}>
                <div
                  className={cn(
                    "px-4 py-2 rounded-2xl",
                    msg.sent
                      ? "chat-bubble-sent rounded-br-sm"
                      : "chat-bubble-received rounded-bl-sm"
                  )}
                >
                  <p className={cn("text-sm", msg.sent && "text-white")}>
                    {msg.text}
                  </p>
                </div>
                <p className={cn("text-xs text-muted-foreground px-2", msg.sent && "text-right")}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border bg-card">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[hsl(var(--chat-input))]"
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
