"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Search, Globe, LineChart, Users, Zap, 
  BarChart, PieChart, TrendingUp, MessageSquare, 
  FileText, DollarSign, MousePointer, Smartphone, Award,
  CheckCircle2, Layers, Target, Building2, Hotel
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AnalyticsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on how much of the element is in view
      const start = rect.top <= 0 ? 0 : rect.top / windowHeight
      const end = rect.bottom >= windowHeight ? 1 : rect.bottom / windowHeight
      
      const progress = 1 - (end - start)
      setScrollY(Math.max(0, Math.min(1, progress)))
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate parallax values
  const y = scrollY * 200
  const opacity = 1 - (scrollY * 2)

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&brightness=80&contrast=110"
            alt="Analytics and Insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Animated data visualization elements */}
          <motion.div 
            style={{ 
              y: y,
              opacity: opacity 
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[90%] max-w-4xl aspect-[16/9] opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
                {/* Dashboard Frame */}
                <rect x="50" y="50" width="1100" height="575" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                
                {/* Header */}
                <rect x="50" y="50" width="1100" height="60" rx="8" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <rect x="80" y="70" width="200" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="900" y="70" width="100" height="20" rx="10" fill="hsl(var(--primary))" fillOpacity="0.2" />
                <rect x="1020" y="70" width="100" height="20" rx="10" fill="hsl(var(--accent))" fillOpacity="0.2" />
                
                {/* Sidebar */}
                <rect x="50" y="110" width="200" height="515" rx="0" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="80" y="150" width="140" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="80" y="190" width="140" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="80" y="230" width="140" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="80" y="270" width="140" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="80" y="310" width="140" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.3" />
                
                {/* Main Content - Charts */}
                <rect x="280" y="130" width="400" height="220" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="300" y="150" width="360" height="30" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <path d="M300,320 L320,280 L340,300 L360,260 L380,240 L400,250 L420,220 L440,210 L460,230 L480,200" 
                      fill="none" stroke="hsl(var(--primary))" strokeWidth="3" />
                <path d="M300,340 L320,320 L340,330 L360,300 L380,310 L400,280 L420,290 L440,260 L460,270 L480,240" 
                      fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" />
                
                {/* Pie Chart */}
                <circle cx="850" cy="240" r="100" fill="none" stroke="hsl(var(--muted))" strokeWidth="1" />
                <path d="M850,240 L850,140 A100,100 0 0,1 933,198 Z" fill="hsl(var(--primary))" fillOpacity="0.3" />
                <path d="M850,240 L933,198 A100,100 0 0,1 933,282 Z" fill="hsl(var(--secondary))" fillOpacity="0.3" />
                <path d="M850,240 L933,282 A100,100 0 0,1 850,340 Z" fill="hsl(var(--accent))" fillOpacity="0.3" />
                <path d="M850,240 L850,340 A100,100 0 0,1 767,282 Z" fill="hsl(var(--primary))" fillOpacity="0.2" />
                <path d="M850,240 L767,282 A100,100 0 0,1 767,198 Z" fill="hsl(var(--secondary))" fillOpacity="0.2" />
                <path d="M850,240 L767,198 A100,100 0 0,1 850,140 Z" fill="hsl(var(--accent))" fillOpacity="0.2" />
                
                {/* Bar Chart */}
                <rect x="280" y="380" width="400" height="220" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="300" y="400" width="360" height="30" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="320" y="450" width="40" height="120" rx="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
                <rect x="380" y="480" width="40" height="90" rx="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
                <rect x="440" y="430" width="40" height="140" rx="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
                <rect x="500" y="500" width="40" height="70" rx="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
                <rect x="560" y="460" width="40" height="110" rx="4" fill="hsl(var(--primary))" fillOpacity="0.3" />
                
                {/* Data Table */}
                <rect x="710" y="380" width="400" height="220" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="730" y="400" width="360" height="30" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <line x1="730" y1="450" x2="1090" y2="450" stroke="hsl(var(--muted))" strokeWidth="1" />
                <line x1="730" y1="490" x2="1090" y2="490" stroke="hsl(var(--muted))" strokeWidth="1" />
                <line x1="730" y1="530" x2="1090" y2="530" stroke="hsl(var(--muted))" strokeWidth="1" />
                <line x1="730" y1="570" x2="1090" y2="570" stroke="hsl(var(--muted))" strokeWidth="1" />
                <line x1="850" y1="430" x2="850" y2="570" stroke="hsl(var(--muted))" strokeWidth="1" />
                <line x1="970" y1="430" x2="970" y2="570" stroke="hsl(var(--muted))" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
          
          {/* Animated data points */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              {/* Animated data points */}
              {Array.from({ length: 20 }).map((_, i) => (
                <circle 
                  key={i} 
                  cx={200 + i * 50} 
                  cy={300 + (i % 3) * 100} 
                  r="4" 
                  fill="hsl(var(--primary))"
                  opacity="0.8"
                >
                  <animate 
                    attributeName="cy" 
                    values={`${300 + (i % 3) * 100};${250 + (i % 3) * 100};${300 + (i % 3) * 100}`} 
                    dur={`${2 + i * 0.2}s`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.8;0.3;0.8" 
                    dur={`${2 + i * 0.2}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
              ))}
              
              {/* Connecting lines */}
              <path 
                d="M200,300 C300,250 400,350 500,300 S700,250 800,300 S900,350 1000,300" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.5"
              >
                <animate 
                  attributeName="d" 
                  values="M200,300 C300,250 400,350 500,300 S700,250 800,300 S900,350 1000,300;
                         M200,320 C300,270 400,370 500,320 S700,270 800,320 S900,370 1000,320;
                         M200,300 C300,250 400,350 500,300 S700,250 800,300 S900,350 1000,300" 
                  dur="10s" 
                  repeatCount="indefinite" 
                />
              </path>
            </svg>
          </div>
        </div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="container relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
            >
              Analytics & Insights
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              Gain clarity before taking action. Evaluate your current marketing performance, uncover opportunities, and make data-driven decisions to optimize your strategy before scaling.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Assess My Marketing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Dynamic background effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-gentle" style={{ animationDuration: "15s" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/10 to-transparent animate-pulse-gentle" style={{ animationDuration: "20s", animationDelay: "5s" }}></div>
          </div>
          
          {/* Data visualization elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg width="90%" height="90%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,400 C300,300 500,500 700,300 S900,200 1100,300" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" />
              <path d="M100,500 C300,600 500,400 700,500 S900,600 1100,500" 
                    fill="none" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" />
              <circle cx="100" cy="400" r="8" fill="hsl(var(--primary))" />
              <circle cx="300" cy="300" r="8" fill="hsl(var(--primary))" />
              <circle cx="500" cy="500" r="8" fill="hsl(var(--primary))" />
              <circle cx="700" cy="300" r="8" fill="hsl(var(--primary))" />
              <circle cx="900" cy="200" r="8" fill="hsl(var(--primary))" />
              <circle cx="1100" cy="300" r="8" fill="hsl(var(--primary))" />
              
              <circle cx="100" cy="500" r="8" fill="hsl(var(--secondary))" />
              <circle cx="300" cy="600" r="8" fill="hsl(var(--secondary))" />
              <circle cx="500" cy="400" r="8" fill="hsl(var(--secondary))" />
              <circle cx="700" cy="500" r="8" fill="hsl(var(--secondary))" />
              <circle cx="900" cy="600" r="8" fill="hsl(var(--secondary))" />
              <circle cx="1100" cy="500" r="8" fill="hsl(var(--secondary))" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="container relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Your Data-Driven Roadmap
              <span className="gradient-text block mt-2">for Smarter Marketing</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              Our Analytics & Insights service helps brands navigate APAC's complex digital landscape with a comprehensive marketing audit, performance analysis, and data-backed recommendations. We evaluate your current strategy, analyze audience engagement, content effectiveness, and budget allocation to maximize impact and ROI.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            How We Help
            <span className="gradient-text block mt-2">Our Analytics Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Marketing Performance Audit",
                description: "Identify gaps and opportunities in your digital strategy. We evaluate your current channels, audience engagement, and marketing operations to uncover areas for optimization.",
                features: [
                  "Channel Performance Analysis",
                  "Competitive Benchmarking",
                  "Marketing Stack Evaluation",
                  "Growth Opportunity Mapping"
                ]
              },
              {
                icon: Users,
                title: "Audience & Engagement Analytics",
                description: "Understand how your audience interacts with your brand across platforms. Gain deep insights into behavior, engagement trends, and conversion drivers.",
                features: [
                  "Audience Segmentation",
                  "Engagement Pattern Analysis",
                  "Customer Journey Mapping",
                  "Conversion Funnel Optimization"
                ]
              },
              {
                icon: FileText,
                title: "Content Effectiveness Analysis",
                description: "Optimize your content for better engagement and conversions. Identify what works, what doesn't, and how to create more impactful messaging.",
                features: [
                  "Content Performance Metrics",
                  "Message Resonance Testing",
                  "Format Effectiveness",
                  "Content Gap Analysis"
                ]
              },
              {
                icon: DollarSign,
                title: "Budget & Channel Optimization",
                description: "Maximize your marketing ROI with strategic budget allocation and channel effectiveness analysis. Get actionable recommendations to refine your investment strategy.",
                features: [
                  "ROI Analysis by Channel",
                  "Budget Allocation Modeling",
                  "Cost Efficiency Assessment",
                  "Investment Prioritization"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card group"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`
                } as React.CSSProperties}
              >
                <div className="premium-card-content">
                  <div className="premium-card-icon">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="premium-card-text">
                    <h3 className="premium-card-title">{service.title}</h3>
                    <p className="premium-card-description">{service.description}</p>
                    
                    <div className="mt-6 space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
        
        <div className="container relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Analytics is the First Step
            <span className="gradient-text block mt-2">to Smarter Marketing</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">30-40%</div>
              <p className="text-muted-foreground">
                of marketing budgets are typically wasted on ineffective channels
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">2-3x</div>
              <p className="text-muted-foreground">
                better ROI achieved through data-driven marketing strategies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">85%</div>
              <p className="text-muted-foreground">
                of companies struggle to measure marketing effectiveness accurately
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-center text-lg mb-8">
              Many companies invest in marketing without fully understanding what's working and what's not. Our data-driven approach ensures that every marketing decision is backed by insights—helping you eliminate waste, optimize efforts, and scale efficiently.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eliminate guesswork and assumptions</h3>
                  <p className="text-muted-foreground">
                    Replace intuition with data-backed insights to make confident marketing decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimize your marketing budget allocation</h3>
                  <p className="text-muted-foreground">
                    Identify which channels and tactics deliver the highest ROI and reallocate resources accordingly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create a strategic roadmap for growth</h3>
                  <p className="text-muted-foreground">
                    Develop a clear, data-driven plan to scale your marketing efforts effectively.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            See It in Action
            <span className="gradient-text block mt-2">Real Results from Data-Driven Insights</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">B2B Manufacturing Company</h3>
                  <p className="premium-card-description mb-4">
                    A global B2B brand reduced wasted ad spend by 40% through channel performance optimization and improved lead quality by reallocating budget to high-performing channels.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold gradient-text">40%</div>
                      <p className="text-sm text-muted-foreground">Reduction in wasted ad spend</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold gradient-text">2.5x</div>
                      <p className="text-sm text-muted-foreground">Increase in qualified leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Hotel className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Luxury Hospitality Brand</h3>
                  <p className="premium-card-description mb-4">
                    A hospitality brand improved lead conversion rates by 30% after a content effectiveness analysis identified key messaging gaps and optimized their customer journey.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold gradient-text">30%</div>
                      <p className="text-sm text-muted-foreground">Increase in conversion rate</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold gradient-text">45%</div>
                      <p className="text-sm text-muted-foreground">Reduction in cost per booking</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Take the Guesswork Out of Your Marketing
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Start Today</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Let's discuss how our analytics services can help you uncover insights and create a data-driven roadmap for growth in APAC.
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