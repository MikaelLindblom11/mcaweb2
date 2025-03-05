"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Hotel } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function IndustriesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=100&w=2000&brightness=65&contrast=125"
            alt="APAC business landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced overlay with better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black/30" />
          
          {/* Animated particles - Only rendered client-side */}
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
            {/* Enhanced title with gradient text */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-md"
            >
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 drop-shadow-lg">Digital Marketing</span> Strategies
            </motion.h1>
            
            {/* Enhanced subtitle with better readability */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md"
            >
              We help B2B and Hospitality brands scale across China, Singapore, and Southeast Asia through data-driven marketing strategies tailored to their unique challenges.
            </motion.p>
            
            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center font-medium">
                    Explore Your Industry
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
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

      {/* Industry Cards */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <IndustryCard
              title="B2B Marketing"
              description="Digital strategies for Manufacturing, Professional Services, and Technology companies expanding across APAC markets."
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=100&w=1200&brightness=80&contrast=110"
              icon={Building2}
              href="/industries/b2b"
              features={[
                "LinkedIn & ABM Campaigns",
                "WeChat B2B Marketing",
                "Lead Generation",
                "Content Marketing"
              ]}
            />

            <IndustryCard
              title="Hospitality Marketing"
              description="Performance-driven digital solutions for Hotels, Resorts, and Travel Brands to increase direct bookings and brand awareness."
              image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=100&w=1200&brightness=80&contrast=110"
              icon={Hotel}
              href="/industries/hospitality"
              features={[
                "Direct Booking Campaigns",
                "Xiaohongshu & WeChat",
                "Travel Influencer Marketing",
                "Local SEO Optimization"
              ]}
            />
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
              Ready to Scale Your Brand in APAC?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Get Started</span>
            </h2>
            <p className="text-xl mb-12 text-white/80">
              Book a strategy consultation to discuss how we can help you achieve your growth objectives with industry-specific solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg font-medium group px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              asChild
            >
              <Link href="/contact">
                <span className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function IndustryCard({
  title,
  description,
  image,
  icon: Icon,
  href,
  features
}: {
  title: string
  description: string
  image: string
  icon: any
  href: string
  features: string[]
}) {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 brightness-110 contrast-105 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/50" />
      </div>
      
      <div className="relative z-10 p-8">
        <Icon className="h-12 w-12 text-primary mb-6 group-hover:text-secondary transition-colors" />
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-8">{description}</p>
        
        <ul className="grid gap-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  )
}