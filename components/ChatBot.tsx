
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageSquare, Minimize2, Loader2, Sparkles } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { Chat, GenerateContentResponse } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "SYSTEM ONLINE. I am Unit 01, your AI Dispatcher. How can I assist with your appliance today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSession.current) {
      try {
        chatSession.current = createChatSession();
      } catch (error) {
        console.error("Failed to init chat", error);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || !chatSession.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result: GenerateContentResponse = await chatSession.current.sendMessage({ message: userMsg });
      const text = result.text || "I'm having trouble connecting to the dispatch network. Please call (818) 731-0445.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again or call dispatch directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-[999] transition-all duration-500 shadow-2xl flex items-center justify-center group ${
            isOpen 
            ? 'bottom-6 right-6 w-12 h-12 rounded-full bg-[#1D1D1B] text-white hover:bg-gray-800' 
            : 'bottom-6 right-6 md:right-24 w-16 h-16 rounded-full bg-[#1D1D1B] text-white hover:scale-110 border-4 border-white/10'
        }`}
      >
        {isOpen ? (
            <X size={24} />
        ) : (
            <>
                <div className="absolute inset-0 bg-[#1D1D1B] rounded-full animate-ping opacity-20"></div>
                <Bot size={32} className="group-hover:rotate-12 transition-transform" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00B67A] rounded-full border-2 border-[#1D1D1B] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </div>
            </>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] max-h-[70vh] bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 z-[999] flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#1D1D1B] p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10 relative">
                    <Bot size={20} className="text-white" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00B67A] rounded-full border-2 border-[#1D1D1B]"></div>
                </div>
                <div>
                    <div className="text-white font-bold text-sm">AI Dispatcher</div>
                    <div className="text-[#00B67A] text-[10px] font-mono uppercase tracking-wider animate-pulse">System Online</div>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <Minimize2 size={18} />
            </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent bg-[#F8FAFC]">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                        className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium leading-relaxed ${
                            msg.role === 'user' 
                            ? 'bg-[#1D1D1B] text-white rounded-tr-sm' 
                            : 'bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm'
                        }`}
                    >
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2 text-xs font-mono text-gray-400">
                        <Loader2 size={14} className="animate-spin text-[#E30613]" />
                        PROCESSING...
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
            <div className="relative flex items-center">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your question..."
                    className="w-full bg-gray-100 text-[#1D1D1B] rounded-full pl-5 pr-12 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1D1D1B]/10 transition-all"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 w-8 h-8 bg-[#1D1D1B] rounded-full flex items-center justify-center text-white disabled:opacity-50 hover:bg-[#E30613] transition-colors"
                >
                    <Send size={14} />
                </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[9px] text-gray-400 flex items-center justify-center gap-1">
                    <Sparkles size={8} /> Powered by Gemini AI
                </span>
            </div>
        </div>
      </div>
    </>
  );
};
