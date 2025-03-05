"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Search, Globe, LineChart, Users, Zap, 
  Code, BarChart, PieChart, TrendingUp, MessageSquare, 
  FileText, DollarSign, MousePointer, Smartphone, Award,
  CheckCircle2, Layers, Target, Building2, Hotel
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

export default function WebSEOPage() {
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
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&brightness=80&contrast=110"
            alt="Web & SEO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Animated data visualization elements */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[90%] max-w-4xl aspect-[16/9] opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
                {/* Browser Window */}
                <rect x="50" y="50" width="1100" height="575" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                
                {/* Browser Header */}
                <rect x="50" y="50" width="1100" height="40" rx="8" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <circle cx="80" cy="70" r="8" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <circle cx="110" cy="70" r="8" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <circle cx="140" cy="70" r="8" fill="hsl(var(--muted))" fillOpacity="0.3" />
                <rect x="200" y="60" width="800" height="20" rx="10" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* Website Content */}
                <rect x="100" y="120" width="400" height="60" rx="4" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <rect x="100" y="200" width="300" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="100" y="240" width="250" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="100" y="280" width="350" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* Image Placeholder */}
                <rect x="600" y="120" width="500" height="300" rx="8" fill="hsl(var(--secondary))" fillOpacity="0.1" />
                
                {/* Button */}
                <rect x="100" y="350" width="200" height="40" rx="20" fill="hsl(var(--primary))" fillOpacity="0.2" />
                
                {/* Mobile Mockup */}
                <rect x="100" y="420" width="250" height="150" rx="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
                <rect x="120" y="440" width="210" height="110" rx="4" fill="hsl(var(--accent))" fillOpacity="0.1" />
                
                {/* SEO Elements */}
                <rect x="400" y="420" width="300" height="150" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="420" y="440" width="260" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="420" y="470" width="200" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="420" y="500" width="240" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="420" y="530" width="180" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* Analytics */}
                <rect x="750" y="420" width="300" height="150" rx="8" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
                <path d="M780,530 L800,490 L820,510 L840,470 L860,450 L880,460 L900,430 L920,420 L940,440 L960,410" 
                      fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <path d="M780,550 L800,520 L820,530 L840,500 L860,510 L880,480 L900,490 L920,460 L940,470 L960,440" 
                      fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
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
              Websites That Convert & Rank
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              From SEO-driven website development to technical optimization, we help brands increase their visibility and drive conversions across APAC's diverse search landscapes.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Boost Your Online Presence
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
          
          {/* Chart visualization elements */}
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
              Websites That Drive
              <span className="gradient-text block mt-2">Business Results</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              In today's digital landscape, your website is often the first touchpoint with potential customers. We create SEO-driven, conversion-optimized websites that not only look great but also perform exceptionally well across search engines in APAC markets. From technical SEO to localized content strategies, we ensure your digital presence is primed for success.
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
            <span className="gradient-text block mt-2">Our Web & SEO Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">Website Development</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Custom, SEO-driven websites optimized for performance, user experience, and conversions.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Responsive Design</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Performance Optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">UX/UI Excellence</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Conversion-Focused</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SEO Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">SEO Strategy</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Comprehensive SEO strategies tailored to APAC's diverse search landscapes and languages.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Keyword Research</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Competitor Analysis</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Content Strategy</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Technical SEO</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Local SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">Local SEO</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Targeted local SEO strategies to improve visibility in specific APAC markets and regions.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Local Keyword Targeting</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Google My Business</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Local Citations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Regional Link Building</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SEO Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">SEO Analytics</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Comprehensive tracking and reporting to measure performance and drive continuous improvement.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Ranking Tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Traffic Analysis</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Conversion Tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">ROI Measurement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">Mobile Optimization</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Mobile-first strategies for APAC's predominantly mobile user base across all markets.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Mobile-First Design</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Page Speed Optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">AMP Implementation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Mobile UX Enhancement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">Technical SEO</h3>
                
                <p className="text-sm text-slate-600 mb-5">
                  Advanced technical optimization to ensure maximum search engine visibility and performance.
                </p>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Site Architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Schema Markup</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Core Web Vitals</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <span className="text-sm text-slate-700">Crawlability Optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            Why SEO Matters
            <span className="gradient-text block mt-2">In APAC Markets</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">93%</div>
              <p className="text-muted-foreground">
                of online experiences begin with a search engine
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">75%</div>
              <p className="text-muted-foreground">
                of users never scroll past the first page of search results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">67%</div>
              <p className="text-muted-foreground">
                of all clicks go to the first five organic search results
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
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increase visibility in a competitive landscape</h3>
                  <p className="text-muted-foreground">
                    Stand out in APAC's crowded digital marketplace with strategic SEO that puts your brand in front of the right audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Drive qualified traffic that converts</h3>
                  <p className="text-muted-foreground">
                    Attract visitors who are actively searching for your products or services, resulting in higher conversion rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build credibility and trust</h3>
                  <p className="text-muted-foreground">
                    Higher search rankings signal credibility to potential customers, establishing your brand as an authority in your industry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Our SEO
            <span className="gradient-text block mt-2">Process</span>
          </motion.h2>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Research & Analysis",
                  description: "We begin with comprehensive research into your industry, competitors, target audience, and current SEO performance.",
                  icon: Search,
                  align: "right"
                },
                {
                  number: "02",
                  title: "Strategy Development",
                  description: "Based on our findings, we create a tailored SEO strategy focused on your specific goals and APAC market requirements.",
                  icon: Target,
                  align: "left"
                },
                {
                  number: "03",
                  title: "Technical Optimization",
                  description: "We optimize your website's technical foundation to ensure search engines can effectively crawl and index your content.",
                  icon: Code,
                  align: "right"
                },
                {
                  number: "04",
                  title: "Content Enhancement",
                  description: "We develop and optimize content that resonates with your audience and ranks well in search engines.",
                  icon: FileText,
                  align: "left"
                },
                {
                  number: "05",
                  title: "Implementation & Monitoring",
                  description: "We implement our strategies and continuously monitor performance to ensure optimal results.",
                  icon: BarChart,
                  align: "right"
                },
                {
                  number: "06",
                  title: "Refinement & Growth",
                  description: "We analyze results, refine our approach, and identify new opportunities for growth and improvement.",
                  icon: TrendingUp,
                  align: "left"
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
              Ready to Boost Your Online Visibility?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Let's Get Started</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Contact us today to discuss how our Web & SEO services can help you achieve your digital growth objectives in APAC.
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