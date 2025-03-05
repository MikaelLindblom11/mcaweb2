"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ExternalLink, Mail, X, Sparkles, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NewsletterPopup } from "@/components/newsletter-popup"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { toast } from "sonner"

export default function InsightsPage() {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already dismissed or subscribed
      const hasInteracted = localStorage.getItem('insightsNewsletterInteraction');
      if (!hasInteracted) {
        setShowNewsletterPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowNewsletterPopup(false);
    localStorage.setItem('insightsNewsletterInteraction', 'dismissed');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletterPopup(false);
    localStorage.setItem('insightsNewsletterInteraction', 'subscribed');
    toast.success('Thanks for subscribing to our insights newsletter!');
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Newsletter Popup */}
      <NewsletterPopup />
      
      {/* Custom Insights Newsletter Popup */}
      <AnimatePresence>
        {showNewsletterPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={handleClosePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-4 overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={handleClosePopup}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 text-white"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="grid md:grid-cols-2">
                {/* Left side - Image and content */}
                <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-10 text-white">
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse-gentle" style={{ animationDuration: "8s" }}></div>
                    
                    {/* Animated particles - Only rendered client-side */}
                    {isMounted && Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary/40"
                        initial={{ 
                          x: Math.random() * 100 + "%", 
                          y: Math.random() * 100 + "%", 
                          opacity: Math.random() * 0.5 + 0.3 
                        }}
                        animate={{ 
                          y: [null, Math.random() * 100 + "%"],
                          opacity: [null, Math.random() * 0.5 + 0.1]
                        }}
                        transition={{ 
                          duration: Math.random() * 10 + 10, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                    ))}
                    
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                          </pattern>
                          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#smallGrid)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">APAC Insights</h3>
                          <p className="text-sm text-white/70">Exclusive marketing intelligence</p>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-4 leading-tight">
                        Stay ahead of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">digital curve</span>
                      </h2>
                      
                      <p className="text-white/80 mb-6">
                        Join marketing leaders who receive our exclusive insights on APAC's evolving digital landscape.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <p className="text-sm text-white/80">In-depth analysis of emerging APAC trends</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                        <p className="text-sm text-white/80">Data-backed strategies that drive growth</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <p className="text-sm text-white/80">Monthly delivery to your inbox</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Form */}
                <div className="bg-white p-10 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Subscribe to our newsletter</h3>
                    <p className="text-gray-600">
                      Get exclusive insights and strategies delivered directly to your inbox.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubscribe} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/20"
                      >
                        <span className="flex items-center">
                          Subscribe to Insights
                          <Mail className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section - Enhanced with better contrast and readability */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=2000&brightness=65&contrast=125"
            alt="Digital insights background"
            fill
            className="object-cover"
            priority
          />
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75" />
          
          {/* Subtle glow effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black/30" />
          
          {/* Animated particles for visual interest - Only rendered client-side */}
          {isMounted && (
            <div className="absolute inset-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.5
                  }}
                  animate={{ 
                    y: [0, Math.random() * 50],
                    opacity: [0.5, 0.2, 0.5]
                  }}
                  transition={{ 
                    duration: Math.random() * 10 + 10, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Title with text animation and enhanced readability */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-md"
            >
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 drop-shadow-lg">Insights</span>
            </motion.h1>
            
            {/* Subtitle with improved readability */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md"
            >
              Stay ahead of the curve with expert analysis and the latest digital marketing trends in APAC. Explore our recent insights and discover strategies that drive growth.
            </motion.p>
            
            {/* Enhanced CTA Button with vibrant hover effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center font-medium">
                  Explore Insights
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator with fade-in effect */}
        {isMounted && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white/80 text-sm mb-2 drop-shadow-md">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* Articles Grid */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InsightCard
              title="B2B Marketing Trends in China for 2025: Actionable Insights for Success"
              excerpt="As China's economy continues to grow and evolve, its B2B market presents immense opportunities for businesses that can adapt to its unique digital and cultural landscape. The year 2025 will be shaped by new buyer behaviors, platform innovations, and marketing strategies tailored to Chinese businesses."
              image="/2025 trends .png"
              date="March 1, 2024"
              url="https://www.linkedin.com/pulse/b2b-marketing-trends-china-2025-actionable-insights-dkqgc/?trackingId=pSGG%2FOUGea7xoibPnM7tnQ%3D%3D"
            />

            <InsightCard
              title="An Inside Look at XiaohongShu: What Brands Need to Know"
              excerpt="Did you know that over 200 million users actively engage with XiaohongShu each month? Known internationally as 'Little Red Book' or 'REDnote,' the platform is a hub for authentic content and reliable product recommendations."
              image="/XHS.png"
              date="February 25, 2024"
              url="https://www.linkedin.com/pulse/inside-look-xiaohongshu-what-brands-need-know-x9wxc/?trackingId=Id0490%2FlEMVLxHyC4K2fMA%3D%3D"
            />
            
            <InsightCard
              title="What You Need to Increase Digital Lead Generation as a B2B Company in Southeast Asia"
              excerpt="Southeast Asia's digital economy is growing rapidly, with more businesses relying on online research, digital interactions, and targeted content to make purchasing decisions."
              image="/B2B image .png"
              date="February 22, 2024"
              url="https://www.linkedin.com/pulse/what-you-need-increase-digital-lead-generation-nx6xc/?trackingId=FVyUVUsWMkP%2FQLQrFO7dmg%3D%3D"
            />

            <InsightCard
              title="Unlocking Marketing Success: Data-Driven Strategies for APAC Growth"
              excerpt="In today's digital landscape, successful marketing in APAC requires a sophisticated understanding of data analytics, consumer behavior, and regional market dynamics. Learn how leading brands are leveraging data-driven insights to achieve remarkable growth in this diverse region."
              image="/marketing-success.png"
              date="February 18, 2024"
              url="https://www.linkedin.com/pulse/unlocking-marketing-success-data-driven-strategies-apac-growth"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] rounded-xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Subscribe to our newsletter
              </h2>
              <p className="text-white/80 text-lg">
                Get monthly insights, delivered to your inbox.
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => {
              e.preventDefault();
              toast.success('Thanks for subscribing to our insights newsletter!');
            }}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white"
                required
              />
              <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white py-3 px-6 rounded-lg shadow-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1a2f]">
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f] via-[#0d2a4a] to-[#0f3060]" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Want to Stay Updated?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Follow Us</span>
            </h2>
            <p className="text-xl mb-12 text-white/80">
              Follow us on LinkedIn for the latest insights and trends in APAC digital marketing.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg font-medium group px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              asChild
            >
              <Link 
                href="https://www.linkedin.com/company/marketing-collective-asia/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  Follow Us on LinkedIn
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function InsightCard({
  title,
  excerpt,
  image,
  date,
  url,
  delay = 0
}: {
  title: string
  excerpt: string
  image: string
  date: string
  url: string
  delay?: number
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-white rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Updated image container with proper aspect ratio */}
      <div className="relative w-full h-[240px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-black/5 to-transparent" />
        
        {/* Date badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {date}
        </div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">{excerpt}</p>
        
        <Button variant="outline" size="sm" className="group/btn rounded-full border-primary/30 hover:border-primary hover:bg-primary/5" asChild>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Read More
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}