
import React, { useState } from "react";
import { Mic, MicOff, X } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const AIAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "¡Hola! Soy Lana, tu asistente de IA. ¿En qué puedo ayudarte hoy?", isUser: false },
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate user speaking
      setTimeout(() => {
        addMessage("Quiero registrar un nuevo pago para Netflix", true);
        // Simulate AI response
        setTimeout(() => {
          addMessage("Perfecto, te ayudaré a registrar un nuevo pago para Netflix. ¿Qué día del mes prefieres realizar el pago?", false);
        }, 1500);
      }, 2000);
    }
  };

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { text, isUser }]);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border/50 p-4">
        <h2 className="text-xl font-semibold">Lana</h2>
        <Link to="/">
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex max-w-[80%] animate-scale-in rounded-2xl p-3",
              message.isUser
                ? "ml-auto bg-primary/20 text-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="border-t border-border/50 p-4">
        <div className="flex justify-center">
          <Button
            onClick={toggleListening}
            className={cn(
              "h-16 w-16 rounded-full transition-all",
              isListening
                ? "bg-destructive text-destructive-foreground"
                : "bg-primary text-primary-foreground"
            )}
          >
            {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
