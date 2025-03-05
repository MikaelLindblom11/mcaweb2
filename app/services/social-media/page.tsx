"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, MessageSquare, Users, Zap, Globe, BarChart, 
  Instagram, Linkedin, Share2, Heart, Award, Target,
  Smartphone, PieChart, TrendingUp, BarChart2
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

export default function SocialMediaPage() {
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
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80"
            alt="Social Media Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Social Media UI Elements */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[90%] max-w-4xl aspect-[16/9] opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
                {/* Instagram Frame */}
                <rect x="50" y="100" width="300" height="500" rx="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="70" y="140" width="260" height="260" rx="10" fill="hsl(var(--primary))" fillOpacity="0.1" />
                <circle cx="200" cy="270" r="60" fill="hsl(var(--secondary))" fillOpacity="0.2" />
                <rect x="70" y="420" width="260" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="70" y="450" width="200" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="70" y="480" width="260" height="80" rx="10" fill="hsl(var(--muted))" fillOpacity="0.1" />
                
                {/* LinkedIn Frame */}
                <rect x="400" y="100" width="400" height="500" rx="10" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
                <rect x="420" y="130" width="360" height="80" rx="4" fill="hsl(var(--secondary))" fillOpacity="0.1" />
                <circle cx="460" cy="170" r="30" fill="hsl(var(--primary))" fillOpacity="0.2" />
                <rect x="500" y="150" width="200" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="500" y="175" width="150" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="420" y="230" width="360" height="200" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="420" y="450" width="360" height="40" rx="20" fill="hsl(var(--accent))" fillOpacity="0.1" />
                <rect x="440" y="460" width="100" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                
                {/* WeChat/XiaohongShu Frame */}
                <rect x="850" y="100" width="300" height="500" rx="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
                <rect x="870" y="130" width="260" height="40" rx="4" fill="hsl(var(--accent))" fillOpacity="0.1" />
                <rect x="870" y="190" width="260" height="260" rx="10" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="870" y="470" width="260" height="20" rx="4" fill="hsl(var(--muted))" fillOpacity="0.2" />
                <rect x="870" y="500" width="200" height="15" rx="4" fill="hsl(var(--muted))" fillOpacity="0.1" />
                <rect x="870" y="530" width="260" height="40" rx="20" fill="hsl(var(--primary))" fillOpacity="0.1" />
              </svg>
            </div>
          </motion.div>
          
          {/* Engagement Wave Animation */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M0,400 C320,500 420,300 640,400 C860,500 960,300 1180,400 C1400,500 1500,300 1720,400" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2"
                strokeDasharray="5,5">
                <animate 
                  attributeName="d" 
                  dur="20s" 
                  repeatCount="indefinite" 
                  values="M0,400 C320,500 420,300 640,400 C860,500 960,300 1180,400 C1400,500 1500,300 1720,400;
                         M0,400 C320,300 420,500 640,400 C860,300 960,500 1180,400 C1400,300 1500,500 1720,400;
                         M0,400 C320,500 420,300 640,400 C860,500 960,300 1180,400 C1400,500 1500,300 1720,400" />
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
              Social Media That Delivers Engagement & Real Results
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              From strategy to execution, we create platform-specific, high-impact social media campaigns tailored to the APAC audience. Whether it's LinkedIn for B2B lead generation or XiaohongShu for brand awareness, we help you connect, engage, and grow.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Let's Elevate Your Social Strategy
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
          {/* Light waves representing audience engagement */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M0,150 C150,100 300,50 450,100 C600,150 750,200 900,150 C1050,100 1200,50 1350,100 C1500,150 1650,200 1800,150" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2"
                strokeDasharray="5,5">
                <animate 
                  attributeName="d" 
                  dur="15s" 
                  repeatCount="indefinite" 
                  values="M0,150 C150,100 300,50 450,100 C600,150 750,200 900,150 C1050,100 1200,50 1350,100 C1500,150 1650,200 1800,150;
                         M0,150 C150,200 300,150 450,100 C600,50 750,100 900,150 C1050,200 1200,150 1350,100 C1500,50 1650,100 1800,150;
                         M0,150 C150,100 300,50 450,100 C600,150 750,200 900,150 C1050,100 1200,50 1350,100 C1500,150 1650,200 1800,150" />
              </path>
              
              <path 
                d="M0,300 C150,350 300,400 450,350 C600,300 750,250 900,300 C1050,350 1200,400 1350,350 C1500,300 1650,250 1800,300" 
                fill="none" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="2"
                strokeDasharray="5,5">
                <animate 
                  attributeName="d" 
                  dur="20s" 
                  repeatCount="indefinite" 
                  values="M0,300 C150,350 300,400 450,350 C600,300 750,250 900,300 C1050,350 1200,400 1350,350 C1500,300 1650,250 1800,300;
                         M0,300 C150,250 300,300 450,350 C600,400 750,350 900,300 C1050,250 1200,300 1350,350 C1500,400 1650,350 1800,300;
                         M0,300 C150,350 300,400 450,350 C600,300 750,250 900,300 C1050,350 1200,400 1350,350 C1500,300 1650,250 1800,300" />
              </path>
              
              <path 
                d="M0,450 C150,400 300,350 450,400 C600,450 750,500 900,450 C1050,400 1200,350 1350,400 C1500,450 1650,500 1800,450" 
                fill="none" 
                stroke="hsl(var(--accent))" 
                strokeWidth="2"
                strokeDasharray="5,5">
                <animate 
                  attributeName="d" 
                  dur="25s" 
                  repeatCount="indefinite" 
                  values="M0,450 C150,400 300,350 450,400 C600,450 750,500 900,450 C1050,400 1200,350 1350,400 C1500,450 1650,500 1800,450;
                         M0,450 C150,500 300,450 450,400 C600,350 750,400 900,450 C1050,500 1200,450 1350,400 C1500,350 1650,400 1800,450;
                         M0,450 C150,400 300,350 450,400 C600,450 750,500 900,450 C1050,400 1200,350 1350,400 C1500,450 1650,500 1800,450" />
              </path>
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
              Winning Strategies for
              <span className="gradient-text block mt-2">Social Media in APAC</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              Social media success in APAC requires more than just posting content. With unique user behaviors, evolving algorithms, and diverse platforms, we tailor strategies that resonate with your audience and drive engagement. Whether you're scaling B2B reach on LinkedIn or driving conversions on TikTok, we craft data-backed, creative-first solutions for sustainable growth.
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
            <span className="gradient-text block mt-2">Our Social Media Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Social Media Strategy",
                description: "Tailored strategies aligned with your business goals & target audience across all relevant platforms.",
                features: [
                  "Platform Selection",
                  "Content Calendar",
                  "Audience Analysis",
                  "KPI Setting"
                ]
              },
              {
                icon: MessageSquare,
                title: "Content Creation",
                description: "Localized, high-quality content optimized for each platform's unique requirements and audience.",
                features: [
                  "Platform-Specific Content",
                  "Visual Design",
                  "Copywriting",
                  "Video Production"
                ]
              },
              {
                icon: Users,
                title: "Community Management",
                description: "Active community building and engagement to foster brand loyalty and advocacy.",
                features: [
                  "Response Management",
                  "Audience Engagement",
                  "Crisis Management",
                  "Brand Monitoring"
                ]
              },
              {
                icon: BarChart,
                title: "Performance Analytics",
                description: "Data-driven insights to continuously optimize your social media performance.",
                features: [
                  "Engagement Metrics",
                  "Conversion Tracking",
                  "Audience Insights",
                  "Competitive Analysis"
                ]
              },
              {
                icon: Zap,
                title: "Influencer Marketing",
                description: "Strategic collaborations with relevant influencers and KOLs to amplify your reach.",
                features: [
                  "Influencer Selection",
                  "Campaign Management",
                  "Performance Tracking",
                  "Content Co-creation"
                ]
              },
              {
                icon: Target,
                title: "Paid Social Advertising",
                description: "Hyper-targeted campaigns optimized for conversions & ROI across all major platforms.",
                features: [
                  "Ad Strategy",
                  "Creative Development",
                  "Audience Targeting",
                  "Budget Optimization"
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
            <span className="gradient-text block mt-2">Global & Regional Expertise</span>
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
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Global Platforms</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Instagram & Facebook</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>LinkedIn (B2B)</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>TikTok</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>YouTube</span>
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
                  <h3 className="premium-card-title">China Platforms</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>WeChat</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>XiaohongShu (RED)</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Douyin</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Weibo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Social Media is Your Brand's
            <span className="gradient-text block mt-2">Most Powerful Growth Tool</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">80%</div>
              <p className="text-muted-foreground">
                of decision-makers use LinkedIn to make purchasing decisions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">3X</div>
              <p className="text-muted-foreground">
                more engagement on TikTok & XiaohongShu than traditional social ads
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
                better performance with localized content in APAC markets
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="premium-card group">
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Drive Audience Engagement</h3>
                  <p className="premium-card-description">
                    Build meaningful connections with your target audience through engaging, platform-optimized content.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card group">
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Increase Brand Loyalty</h3>
                  <p className="premium-card-description">
                    Foster community and strengthen brand advocacy through consistent engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card group">
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Data-Driven Growth</h3>
                  <p className="premium-card-description">
                    Leverage analytics to continuously optimize and improve social media performance.
                  </p>
                </div>
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
              Let's Build Your Social Media Success Story
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Today</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Ready to transform your social media presence and build stronger connections with your audience across APAC?
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