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
import { motion } from "framer-motion"

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

export default function ResearchStrategyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&brightness=80&contrast=110"
            alt="Research and Strategy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Animated data visualization elements */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Glowing map elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="80%" height="80%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M200,100 C300,50 400,150 500,100 S700,150 800,200 S750,350 650,300 S450,350 350,300 S150,250 200,100" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" />
              <circle cx="200" cy="100" r="8" fill="hsl(var(--primary))" />
              <circle cx="350" cy="300" r="8" fill="hsl(var(--primary))" />
              <circle cx="500" cy="100" r="8" fill="hsl(var(--primary))" />
              <circle cx="650" cy="300" r="8" fill="hsl(var(--primary))" />
              <circle cx="800" cy="200" r="8" fill="hsl(var(--primary))" />
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
              Navigate APAC with Data-Driven Precision
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              Expand with confidence. Our market intelligence helps brands decode APAC's complexities, identify untapped opportunities, and drive informed decisions with real-time insights.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Get a Market Analysis
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
          {/* Data-driven background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Chart visualization elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="80%" height="80%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,300 C100,200 200,250 300,150 S500,100 600,200 S700,300 800,250" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="3" />
              <path d="M0,350 C100,320 200,280 300,300 S500,250 600,280 S700,350 800,320" 
                    fill="none" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth="3" />
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
              Strategic Insights for
              <span className="gradient-text block mt-2">Smarter Expansion</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              Winning in APAC requires more than intuition—it demands precision. Our team analyzes shifting market dynamics, competitor landscapes, and customer behaviors to give you the intelligence needed to make the right moves. From market sizing to demand analysis, we transform data into strategy—so every decision leads to measurable success.
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
            <span className="gradient-text block mt-2">Our Research Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: "Market Sizing & Trends",
                description: "Identify growth potential & emerging opportunities across APAC markets with comprehensive market analysis.",
                delay: 0.1
              },
              {
                icon: LineChart,
                title: "Competitor Benchmarking",
                description: "Understand key players, their positioning & performance gaps to develop competitive advantages.",
                delay: 0.2
              },
              {
                icon: PieChart,
                title: "Market Fit & Demand Analysis",
                description: "Assess whether your product aligns with market needs through detailed demand assessment.",
                delay: 0.3
              },
              {
                icon: Map,
                title: "Customer Journey Mapping",
                description: "Discover key touchpoints to refine brand engagement and optimize the customer experience.",
                delay: 0.4
              },
              {
                icon: Compass,
                title: "Go-to-Market Strategy",
                description: "Develop strategic entry & expansion plans for APAC markets with actionable roadmaps.",
                delay: 0.5
              },
              {
                icon: Lightbulb,
                title: "Innovation Research",
                description: "Identify emerging trends and opportunities for product and service innovation in APAC.",
                delay: 0.6
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card group"
              >
                <div className="premium-card-content">
                  <div className="premium-card-icon">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="premium-card-text">
                    <h3 className="premium-card-title">{service.title}</h3>
                    <p className="premium-card-description">{service.description}</p>
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
            Why Insights Matter for
            <span className="gradient-text block mt-2">Market Success</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">90%</div>
              <p className="text-muted-foreground">
                of APAC businesses rely on data for strategic decision-making
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">$3.5M+</div>
              <p className="text-muted-foreground">
                average cost of misaligned market entry strategies in APAC
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">68%</div>
              <p className="text-muted-foreground">
                higher success rate for data-driven market expansion strategies
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
                  <h3 className="text-xl font-semibold mb-2">Reduce market entry risk with data-backed decisions</h3>
                  <p className="text-muted-foreground">
                    Our insights help you navigate APAC's crowded digital marketplace with confidence, minimizing costly missteps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Identify high-potential opportunities others miss</h3>
                  <p className="text-muted-foreground">
                    Discover untapped market segments and emerging trends before your competitors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build scalable, ROI-driven marketing campaigns</h3>
                  <p className="text-muted-foreground">
                    Create marketing strategies that deliver measurable results based on real market intelligence.
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
              Unlock Your Market Potential
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Today</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Ready to transform your approach to APAC markets with data-driven insights and strategic planning?
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

function Map(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}

function Compass(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function Lightbulb(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}