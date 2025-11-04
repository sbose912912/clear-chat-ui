import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Lock, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 p-4">
      <div className="text-center space-y-8 max-w-2xl animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <MessageCircle className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight">
          Transparent Chat App
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-lg mx-auto">
          Experience messaging with a beautiful glassmorphism design and WhatsApp-inspired interface
        </p>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            <span>Secure Login</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>Real-time Chat</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Fast & Modern</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/login")} className="px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/chat")}>
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
