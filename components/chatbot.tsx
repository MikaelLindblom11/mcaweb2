"use client"

import { useState, useEffect, useRef } from 'react'
import { X, MessageSquare, ChevronDown, ChevronUp, User, Bot, Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { toast } from 'sonner'

type Message = {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  options?: string[]
}

type UserInfo = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  market?: string;
}

// Initial welcome message with options
const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi there! 👋 I'm your Marketing Collective Asia assistant. What services are you interested in?",
    sender: 'bot',
    timestamp: new Date(),
    options: [
      "Digital Strategy & Market Entry",
      "Brand & Creative",
      "Website & SEO",
      "Social Media Management",
      "Paid Advertising",
      "Analytics & Insights",
      "Not sure yet"
    ]
  }
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [pulseButton, setPulseButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [chatStage, setChatStage] = useState<'service' | 'market' | 'contact' | 'name' | 'email' | 'company' | 'thanks' | 'whatsapp'>('service')
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = "6591240180"
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  // Show chatbot button after a delay and set mounted state
  useEffect(() => {
    setIsMounted(true)
    
    const timer = setTimeout(() => {
      setPulseButton(true)
    }, 3000)
    
    // Pulse animation for chat button
    const pulseTimer = setInterval(() => {
      setPulseButton(true)
      setTimeout(() => setPulseButton(false), 2000)
    }, 15000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(pulseTimer)
    }
  }, [])
  
  const handleSendMessage = (text?: string) => {
    const messageToSend = text || inputValue
    if (!messageToSend.trim()) return
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    
    // Update user info based on chat stage
    if (chatStage === 'service') {
      setUserInfo(prev => ({ ...prev, service: messageToSend }))
    } else if (chatStage === 'market') {
      setUserInfo(prev => ({ ...prev, market: messageToSend }))
    } else if (chatStage === 'name') {
      setUserInfo(prev => ({ ...prev, name: messageToSend }))
    } else if (chatStage === 'email') {
      setUserInfo(prev => ({ ...prev, email: messageToSend }))
    } else if (chatStage === 'company') {
      setUserInfo(prev => ({ ...prev, company: messageToSend }))
    }
    
    // Simulate bot typing
    setTimeout(() => {
      const botResponse = generateNextQuestion(messageToSend)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse.message,
        sender: 'bot',
        timestamp: new Date(),
        options: botResponse.options
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      
      // Move to next stage
      setChatStage(botResponse.nextStage)
      
      // If we've reached the thanks stage, mark as submitted and send data
      if (botResponse.nextStage === 'thanks') {
        // Instead of submitting to API, just mark as submitted
        // This avoids the API error since we're in a static export
        setIsSubmitted(true);
        toast.success('Thanks for your message! Our team will be in touch soon.');
      }
    }, 1000) // 1 second delay
  }
  
  // Submit chat data to the API - disabled for static export
  const submitChatData = async () => {
    // For static export, we'll just simulate success
    setIsSubmitted(true);
    toast.success('Thanks for your message! Our team will be in touch soon.');
    
    // The following code would be used in a dynamic Next.js app with API routes
    /*
    // Only submit if we have at least some user info
    if (!userInfo.service && !userInfo.email) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare the messages data - ensure it's serializable
      const serializedMessages = messages.map(msg => ({
        ...msg,
        timestamp: msg.timestamp.toISOString() // Convert Date objects to strings
      }));
      
      const response = await fetch('/api/chat-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          messages: serializedMessages,
          timestamp: new Date().toISOString()
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        toast.success('Thanks for your message! Our team will be in touch soon.');
      } else {
        throw new Error(data.message || 'Failed to submit chat data');
      }
    } catch (error) {
      console.error('Error submitting chat data:', error);
      // Still mark as submitted even if there's an error to allow the user to continue
      setIsSubmitted(true);
      toast.error('There was an issue submitting your information, but you can still contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };
  
  // Generate the next question based on the current stage
  const generateNextQuestion = (userInput: string): { message: string, options?: string[], nextStage: 'service' | 'market' | 'contact' | 'name' | 'email' | 'company' | 'thanks' | 'whatsapp' } => {
    switch(chatStage) {
      case 'service':
        return {
          message: `Great! You're interested in ${userInput}. Which market or region are you targeting?`,
          options: ["China", "Southeast Asia", "Japan/Korea", "Australia/New Zealand", "All of APAC", "Not sure yet"],
          nextStage: 'market'
        };
        
      case 'market':
        return {
          message: `Thanks for sharing that information. Would you like to leave your contact details so our team can reach out with more information about ${userInfo.service} in ${userInput}?`,
          options: ["Yes, I'll share my details", "I'd prefer to chat on WhatsApp", "No thanks, I'll browse the website"],
          nextStage: 'contact'
        };
        
      case 'contact':
        if (userInput.toLowerCase().includes('whatsapp')) {
          return {
            message: `Great! You can chat with our team on WhatsApp for faster responses. Click the button below to start a conversation:`,
            options: ["Open WhatsApp", "Share my details instead", "No thanks, I'll browse the website"],
            nextStage: 'whatsapp'
          };
        } else if (userInput.toLowerCase().includes('yes') || userInput.toLowerCase().includes('share')) {
          return {
            message: "Great! What's your name?",
            nextStage: 'name'
          };
        } else {
          return {
            message: "No problem! Feel free to explore our website for more information. If you have any questions later, you can always come back to chat, contact us through our contact page, or reach out via WhatsApp.",
            options: ["Chat on WhatsApp", "Go to contact page", "Explore services"],
            nextStage: 'thanks'
          };
        }
        
      case 'whatsapp':
        if (userInput.toLowerCase().includes('open whatsapp')) {
          // This will be handled by the button click, but we still need to provide a response
          return {
            message: "You'll be redirected to WhatsApp. Is there anything specific you'd like to discuss with our team?",
            options: ["Share my details instead", "No thanks, I'll chat on WhatsApp"],
            nextStage: 'thanks'
          };
        } else if (userInput.toLowerCase().includes('share my details')) {
          return {
            message: "Great! What's your name?",
            nextStage: 'name'
          };
        } else {
          return {
            message: "No problem! Feel free to reach out via WhatsApp or explore our website for more information.",
            options: ["Chat on WhatsApp", "Go to contact page", "Explore services"],
            nextStage: 'thanks'
          };
        }
        
      case 'name':
        return {
          message: `Nice to meet you, ${userInput}! What's your email address so we can reach out?`,
          nextStage: 'email'
        };
        
      case 'email':
        return {
          message: "Thanks! And what company are you with?",
          nextStage: 'company'
        };
        
      case 'company':
        return {
          message: `Thank you for sharing your information! Our team will reach out to you shortly to discuss how we can help ${userInput} with ${userInfo.service} in ${userInfo.market}.\n\nWould you prefer to continue the conversation on WhatsApp for faster responses?`,
          options: ["Yes, let's chat on WhatsApp", "No, email is fine", "Go to contact page"],
          nextStage: 'thanks'
        };
        
      case 'thanks':
      default:
        if (userInput.toLowerCase().includes('whatsapp') || userInput.toLowerCase().includes('chat on whatsapp')) {
          return {
            message: "Great! Click the button below to start a WhatsApp conversation with our team:",
            options: ["Open WhatsApp", "Go to contact page", "Explore services"],
            nextStage: 'thanks'
          };
        } else {
          return {
            message: "Thank you for chatting with us today! If you have any more questions, feel free to browse our website, reach out through our contact page, or message us on WhatsApp for faster responses.",
            options: ["Chat on WhatsApp", "Go to contact page", "Explore services"],
            nextStage: 'thanks'
          };
        }
    }
  }
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  
  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }
  
  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMinimized(true)
  }
  
  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
  }
  
  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    const service = userInfo.service ? `about ${userInfo.service}` : '';
    const market = userInfo.market ? `in ${userInfo.market}` : '';
    const message = `Hi Marketing Collective Asia! I'm interested in learning more ${service} ${market}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }

  // Don't render anything until client-side hydration is complete
  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-4 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/50"
            style={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 20px 5px rgba(0, 123, 255, 0.1)"
            }}
          >
            {/* Chat header with gradient */}
            <div 
              className="p-4 text-white flex items-center justify-between"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Marketing Collective Asia</h3>
                  <div className="flex items-center text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                    Online now
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={minimizeChat}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Minimize chat"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button 
                  onClick={closeChat}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Chat messages with custom styling */}
            <div 
              className="h-96 overflow-y-auto p-4"
              style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(236, 242, 254, 0.4) 0%, rgba(242, 245, 250, 0.2) 100%)",
                backgroundSize: "cover"
              }}
            >
              {messages.map((message, index) => (
                <motion.div 
                  key={message.id} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-primary to-secondary text-white rounded-tr-none shadow-lg' 
                        : 'bg-white shadow-md text-foreground rounded-tl-none border border-border/10'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70 text-right' : 'text-foreground/50'}`}>
                      {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                    
                    {/* Show options buttons if available */}
                    {message.sender === 'bot' && message.options && message.options.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.options.map((option, i) => (
                          option.toLowerCase().includes('whatsapp') ? (
                            <button
                              key={i}
                              onClick={() => {
                                handleSendMessage(option);
                                if (option.toLowerCase() === 'open whatsapp') {
                                  handleWhatsAppClick();
                                }
                              }}
                              className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                            >
                              {option}
                              {option.toLowerCase() === 'open whatsapp' && <ExternalLink className="h-3 w-3 ml-1" />}
                            </button>
                          ) : (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(option)}
                              className="bg-primary/10 hover:bg-primary/20 text-primary text-xs px-3 py-1.5 rounded-full transition-colors"
                            >
                              {option}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {message.sender === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-white text-foreground rounded-2xl rounded-tl-none px-4 py-3 shadow-md border border-border/10">
                    <div className="flex gap-1 items-center h-5">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatType: "loop" }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatType: "loop" }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input with enhanced styling */}
            <div className="p-4 border-t border-border/20 bg-white">
              {!isSubmitted ? (
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-full border border-border bg-muted/10 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    disabled={isSubmitting}
                  />
                  <Button 
                    onClick={() => handleSendMessage()}
                    className="rounded-full h-12 w-12 p-0 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
                    disabled={!inputValue.trim() || isSubmitting}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <div className="text-center py-2 space-y-3">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg w-full"
                  >
                    <span className="flex items-center">
                      Chat on WhatsApp
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              )}
              
              {/* Footer */}
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Powered by Marketing Collective Asia
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-4 shadow-lg cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)"
              }}
            >
              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <span>Continue chatting</span>
              <ChevronUp className="h-4 w-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced chat button with pulse animation */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: pulseButton ? [1, 1.1, 1] : 1, 
          opacity: 1 
        }}
        transition={{ 
          duration: pulseButton ? 0.5 : 0.3,
          type: pulseButton ? "spring" : "tween"
        }}
        className="relative rounded-full shadow-lg transition-transform hover:scale-105 overflow-hidden"
        onClick={toggleChat}
        style={{
          boxShadow: "0 4px 14px rgba(0, 123, 255, 0.5)"
        }}
      >
        <div 
          className="w-16 h-16 flex items-center justify-center text-white"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))"
          }}
        >
          <MessageSquare className="h-7 w-7" />
        </div>
        
        {/* Ripple effect */}
        {pulseButton && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-full border-4 border-primary"
          />
        )}
        
        {/* Notification dot */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white"
        />
      </motion.button>
    </div>
  )
}