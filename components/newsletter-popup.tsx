"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import Image from 'next/image'

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show popup after 5 seconds if not already shown
    const hasInteracted = localStorage.getItem('newsletterInteraction')
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('newsletterInteraction', 'dismissed')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // For static export, we'll just simulate success
      // In a real implementation, you would call your API endpoint here
      // const response = await fetch('/api/newsletter-subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });
      
      // const data = await response.json();
      
      // if (!data.success) {
      //   throw new Error(data.message || 'Failed to subscribe');
      // }
      
      setIsSubmitted(true)
      localStorage.setItem('newsletterInteraction', 'subscribed')
      
      // Close popup after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
      
      toast.success('Thanks for subscribing! You\'ll receive our newsletter soon.')
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      toast.error('There was an issue subscribing you to our newsletter. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl mx-4 overflow-hidden bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 text-primary"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="grid md:grid-cols-5">
              {/* Image sidebar - using the same hero image from home page */}
              <div className="hidden md:block md:col-span-2 relative h-full">
                <div className="absolute inset-0">
                  <Image
                    src="/web-assest-skyline.jpeg"
                    alt="Modern APAC skyline"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f]/80 via-[#0d2a4a]/70 to-[#0f3060]/60" />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <Mail className="h-16 w-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
                    <p className="text-white/80 mt-2">Get the latest insights delivered to your inbox</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:col-span-3">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                    <p className="text-muted-foreground mb-6">
                      Get monthly insights, marketing trends, and APAC growth strategies delivered to your inbox.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setError('')
                          }}
                          placeholder="Your email address"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          required
                          disabled={isSubmitting}
                        />
                        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#0a1a2f] hover:bg-[#0d2a4a] text-white py-3 rounded-lg transition-colors"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Thank you for subscribing!</h2>
                    <p className="text-muted-foreground">
                      You'll now receive our latest insights and updates directly to your inbox.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}