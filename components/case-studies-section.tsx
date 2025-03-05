"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Building2, Hotel } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the element is in view
      const start = rect.top <= 0 ? 0 : rect.top / windowHeight;
      const end = rect.bottom >= windowHeight ? 1 : rect.bottom / windowHeight;
      
      const progress = 1 - (end - start);
      setScrollY(Math.max(0, Math.min(1, progress)));
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      container.style.setProperty('--mouse-x', `${x}%`)
      container.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('scroll', handleScroll);
    container.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  // Calculate parallax values
  const y = scrollY * 100;

  const caseStudies = [
    {
      id: 1,
      title: "B2B Success in APAC",
      description: "Driving digital lead generation and brand positioning for B2B brands in APAC's evolving markets.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&brightness=80&contrast=110",
      icon: Building2,
      stats: [
        { value: "78%", label: "increase in qualified leads" },
        { value: "3.5x", label: "ROI on marketing spend" },
        { value: "40+", label: "B2B clients scaled in APAC" }
      ],
      href: "/industries/b2b"
    },
    {
      id: 2,
      title: "Winning Strategies for Hospitality",
      description: "From direct bookings to brand loyalty, we help hotels & hospitality brands grow in APAC.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&brightness=80&contrast=110",
      icon: Hotel,
      stats: [
        { value: "45%", label: "increase in direct bookings" },
        { value: "32%", label: "reduction in OTA commission costs" },
        { value: "25+", label: "luxury properties across APAC" }
      ],
      href: "/industries/hospitality"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-white" id="case-studies">
      {isMounted && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 pointer-events-none"
        />
      )}
      
      {/* Animated background elements - Only rendered client-side */}
      {isMounted && (
        <>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse-gentle" style={{ animationDuration: "15s" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/5 to-transparent animate-pulse-gentle" style={{ animationDuration: "20s", animationDelay: "5s" }}></div>
          </div>
          
          {/* Subtle texture overlay */}
          <div className="texture-overlay"></div>
        </>
      )}
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Proven Success Across
            <span className="gradient-text block mt-2">Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover how we help businesses in B2B and Hospitality scale in APAC with localized, data-driven marketing.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="md:w-[48%] flex-1"
              onMouseEnter={() => setActiveCard(study.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer h-[500px] flex flex-col"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 20px 0 rgba(0, 123, 255, 0.1)"
                }}
              >
                {/* Background image with gradient overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 brightness-[0.85] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-90 transition-opacity duration-500" />
                  
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
                  {/* Icon */}
                  <div className="absolute top-10 left-10 h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <study.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Stats that appear on hover */}
                  <div className="mb-auto mt-32">
                    <AnimatePresence>
                      {activeCard === study.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-3 gap-4"
                        >
                          {study.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                              <div className="text-xs text-white/70">{stat.label}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">{study.title}</h3>
                  <p className="text-white/80 mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">{study.description}</p>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  >
                    <Button 
                      asChild
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-primary hover:text-primary/80 rounded-full py-2 px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
                    >
                      <Link href={study.href}>
                        <span className="flex items-center font-medium">
                          Learn More
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg font-medium group px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            asChild
          >
            <Link href="/industries">
              <span className="flex items-center">
                Explore All Industries
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}