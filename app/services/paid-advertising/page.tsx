"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Target, LineChart, Globe, Users, Zap, 
  BarChart, PieChart, TrendingUp, Search, Layers, 
  DollarSign, MousePointer, Smartphone, Award, Crosshair,
  MessageSquare, Building2, Hotel
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
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

export default function PaidAdvertisingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Mouse position for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
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

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&brightness=80&contrast=110"
            alt="Paid Advertising"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Animated ad elements */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[90%] max-w-4xl aspect-[16/9] opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
                {/* Search Ad */}
                <rect x="50" y="100" width="500" height="80" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="70" y="120" width="300" height="20" rx="4" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <rect x="70" y="150" width="460" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* Display Ad */}
                <rect x="650" y="100" width="300" height="250" rx="8" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
                <rect x="670" y="120" width="260" height="140" rx="4" fill="hsl(var(--secondary))" fillOpacity="0.1" />
                <rect x="670" y="280" width="180" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="670" y="310" width="120" height="20" rx="10" fill="hsl(var(--accent))" fillOpacity="0.2" />
                
                {/* Social Ad */}
                <rect x="50" y="250" width="500" height="300" rx="8" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
                <circle cx="90" cy="290" r="25" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="130" y="275" width="150" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="130" y="300" width="100" height="10" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="70" y="330" width="460" height="180" rx="4" fill="hsl(var(--accent))" fillOpacity="0.1" />
                <rect x="70" y="520" width="120" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* Analytics Dashboard */}
                <rect x="650" y="400" width="500" height="250" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="670" y="420" width="460" height="40" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="670" y="480" width="220" height="150" rx="4" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <rect x="910" y="480" width="220" height="150" rx="4" fill="hsl(var(--secondary))" fillOpacity="0.1" />
                
                {/* Chart Lines */}
                <path d="M680,610 L700,580 L720,590 L740,570 L760,550 L780,560 L800,530 L820,520 L840,540 L860,510" 
                      fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <path d="M920,610 L940,590 L960,600 L980,570 L1000,580 L1020,550 L1040,560 L1060,530 L1080,540 L1100,510" 
                      fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
          
          {/* Targeting circles animation */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="720" cy="400" r="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8">
                <animate attributeName="r" values="50;200;50" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="720" cy="400" r="100" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6">
                <animate attributeName="r" values="100;250;100" dur="12s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="12s" repeatCount="indefinite" />
              </circle>
              <circle cx="720" cy="400" r="150" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="150;300;150" dur="16s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.05;0.4" dur="16s" repeatCount="indefinite" />
              </circle>
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
              Performance Marketing That Drives Real Growth
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              Data-driven paid advertising strategies across search, social, and programmatic channels. We help brands reach their target audience and achieve measurable ROI in APAC's diverse digital landscape.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Scale Your Advertising
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
              Precision-Targeted Campaigns
              <span className="gradient-text block mt-2">For Maximum ROI</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              In APAC's fragmented digital landscape, effective paid advertising requires more than just budget—it demands strategic targeting, creative excellence, and continuous optimization. We create and manage high-performing campaigns across multiple channels, from search engines to social media platforms, helping brands reach their ideal audience with precision and drive measurable business results.
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
            <span className="gradient-text block mt-2">Our Advertising Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Search Engine Marketing",
                description: "Strategic campaigns across Google, Baidu, Naver, and regional search platforms to capture high-intent traffic.",
                features: [
                  "Keyword Research",
                  "Ad Copy Optimization",
                  "Landing Page Design",
                  "Quality Score Improvement"
                ]
              },
              {
                icon: Users,
                title: "Social Media Advertising",
                description: "Targeted campaigns on Meta, LinkedIn, WeChat, and regional social platforms to engage your ideal audience.",
                features: [
                  "Audience Targeting",
                  "Creative Development",
                  "A/B Testing",
                  "Platform-Specific Optimization"
                ]
              },
              {
                icon: Layers,
                title: "Programmatic Advertising",
                description: "Advanced targeting and real-time bidding across display networks for maximum reach and efficiency.",
                features: [
                  "Audience Segmentation",
                  "Contextual Targeting",
                  "Retargeting Strategies",
                  "Brand Safety Measures"
                ]
              },
              {
                icon: BarChart,
                title: "Performance Analytics",
                description: "Comprehensive tracking, reporting, and optimization of campaigns to maximize ROI and business impact.",
                features: [
                  "Custom Dashboards",
                  "Attribution Modeling",
                  "Conversion Tracking",
                  "ROI Analysis"
                ]
              },
              {
                icon: Target,
                title: "Conversion Optimization",
                description: "Strategic improvements to landing pages and funnels to increase conversion rates and reduce acquisition costs.",
                features: [
                  "Landing Page Testing",
                  "Funnel Analysis",
                  "User Experience Optimization",
                  "Conversion Rate Improvement"
                ]
              },
              {
                icon: Crosshair,
                title: "Remarketing Campaigns",
                description: "Strategic retargeting to re-engage potential customers and nurture them through the conversion funnel.",
                features: [
                  "Audience Segmentation",
                  "Sequential Messaging",
                  "Cross-Platform Retargeting",
                  "Frequency Capping"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="service-card group"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`
                } as React.CSSProperties}
              >
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
                
                <div className="service-card-content">
                  {service.features.map((feature, i) => (
                    <div key={i} className="service-card-feature">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Coverage Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
        
        <div className="container relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Platform Coverage
            <span className="gradient-text block mt-2">Comprehensive APAC Reach</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Search & Display</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Google Ads & Display Network</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Baidu (China)</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Naver (Korea)</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Programmatic Networks</span>
                    </li>
                  </ul>
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
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Social Platforms</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Meta (Facebook & Instagram)</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>LinkedIn Ads</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>WeChat Advertising</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Douyin & TikTok Ads</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>XiaohongShu (RED)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Our Data-Driven
            <span className="gradient-text block mt-2">Approach</span>
          </motion.h2>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Research & Strategy",
                  description: "We begin with comprehensive market research, competitor analysis, and audience insights to develop a targeted advertising strategy.",
                  icon: Search,
                  align: "right"
                },
                {
                  number: "02",
                  title: "Campaign Setup",
                  description: "Our team builds optimized campaign structures with precise targeting, compelling ad creative, and effective landing pages.",
                  icon: Layers,
                  align: "left"
                },
                {
                  number: "03",
                  title: "Testing & Optimization",
                  description: "We continuously test and refine campaigns, identifying top-performing elements and scaling what works.",
                  icon: LineChart,
                  align: "right"
                },
                {
                  number: "04",
                  title: "Performance Analysis",
                  description: "Detailed analytics and reporting provide clear insights into campaign performance and ROI.",
                  icon: PieChart,
                  align: "left"
                },
                {
                  number: "05",
                  title: "Scaling & Expansion",
                  description: "Once we identify winning strategies, we scale budgets and expand to new channels and markets.",
                  icon: TrendingUp,
                  align: "right"
                }
              ].map((step, index) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${step.align === "left" ? "" : "md:grid-flow-dense"}`}
                >
                  {/* Process point */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-background font-bold">{step.number}</span>
                  </div>
                  
                  <div className={`${step.align === "left" ? "md:text-right" : ""}`}>
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-background font-bold">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">{step.title}</h3>
                    </div>
                    <h3 className="text-2xl font-bold gradient-text hidden md:block mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  <div className={`premium-card group h-48 flex items-center justify-center ${step.align === "left" ? "md:order-first" : ""}`}>
                    <step.icon className="h-16 w-16 text-primary group-hover:text-secondary transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
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
            Why Strategic Advertising
            <span className="gradient-text block mt-2">Drives Business Growth</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Targeted Reach</h3>
                  <p className="premium-card-description">
                    Reach your ideal customers with precision targeting across multiple platforms and channels.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Measurable Results</h3>
                  <p className="premium-card-description">
                    Track and measure campaign performance with comprehensive analytics and reporting.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Continuous Optimization</h3>
                  <p className="premium-card-description">
                    Improve campaign performance through data-driven optimization and testing.
                  </p>
                </div>
              </div>
            </motion.div>
           </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="stats-card mx-auto max-w-3xl"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2 gradient-text">5-10x</div>
                <p className="text-muted-foreground text-sm">
                  typical return on ad spend for optimized campaigns
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2 gradient-text">30%+</div>
                <p className="text-muted-foreground text-sm">
                  improvement in conversion rates with strategic optimization
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2 gradient-text">2-3x</div>
                <p className="text-muted-foreground text-sm">
                  better performance with localized APAC advertising strategies
                </p>
              </div>
            </div>
          </motion.div>
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
              Ready to Scale Your Advertising?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Today</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Let's discuss how our paid advertising services can help you achieve better ROI and reach in APAC markets.
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