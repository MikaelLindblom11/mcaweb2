"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Palette, MessageSquare, CheckCircle2, Brush, 
  Megaphone, PenTool, Layers, Sparkles, Lightbulb, BarChart, Search
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

export default function BrandCreativePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            alt="Brand and Creative"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Animated light flares */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-gentle"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[90px] animate-pulse-gentle" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="80%" height="80%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <rect x="100" y="100" width="150" height="100" rx="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <rect x="300" y="150" width="200" height="80" rx="10" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
              <rect x="550" y="120" width="120" height="120" rx="10" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
              <rect x="200" y="250" width="180" height="100" rx="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <rect x="450" y="270" width="150" height="80" rx="10" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
              <line x1="175" y1="150" x2="300" y2="190" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="400" y1="150" x2="550" y2="180" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="290" y1="250" x2="400" y2="230" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="380" y1="300" x2="450" y2="310" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
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
              Stand Out & Resonate: Market-Driven Brand Strategies
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              In APAC's fast-evolving markets, cultural relevance is key. We develop brands that captivate, engage, and convert by aligning your identity with local insights, creative storytelling, and precision messaging.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Let's Build Your Brand
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
          {/* Subtle motion background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-gentle" style={{ animationDuration: "8s" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/10 to-transparent animate-pulse-gentle" style={{ animationDuration: "12s", animationDelay: "2s" }}></div>
          </div>
          
          {/* Elegant typography elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg width="80%" height="80%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <text x="50" y="80" fontFamily="serif" fontSize="60" fill="hsl(var(--primary))">A</text>
              <text x="150" y="120" fontFamily="sans-serif" fontSize="80" fill="hsl(var(--secondary))">B</text>
              <text x="250" y="100" fontFamily="monospace" fontSize="70" fill="hsl(var(--accent))">C</text>
              <text x="350" y="150" fontFamily="serif" fontSize="90" fill="hsl(var(--primary))">D</text>
              <text x="450" y="90" fontFamily="sans-serif" fontSize="60" fill="hsl(var(--secondary))">E</text>
              <text x="550" y="130" fontFamily="monospace" fontSize="80" fill="hsl(var(--accent))">F</text>
              <text x="650" y="110" fontFamily="serif" fontSize="70" fill="hsl(var(--primary))">G</text>
              <text x="100" y="200" fontFamily="sans-serif" fontSize="80" fill="hsl(var(--secondary))">H</text>
              <text x="200" y="250" fontFamily="monospace" fontSize="70" fill="hsl(var(--accent))">I</text>
              <text x="300" y="220" fontFamily="serif" fontSize="60" fill="hsl(var(--primary))">J</text>
              <text x="400" y="270" fontFamily="sans-serif" fontSize="90" fill="hsl(var(--secondary))">K</text>
              <text x="500" y="230" fontFamily="monospace" fontSize="80" fill="hsl(var(--accent))">L</text>
              <text x="600" y="260" fontFamily="serif" fontSize="70" fill="hsl(var(--primary))">M</text>
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
              Branding That Breaks Through
              <span className="gradient-text block mt-2">The Noise</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              Your brand is more than a logo—it's a story, a promise, and an experience. We create compelling brand identities that connect with your audience, ensuring every element—from messaging to design—is optimized for impact. With a deep understanding of APAC's markets, we help brands evolve into powerful, recognizable entities that stand out where it matters most.
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
            <span className="gradient-text block mt-2">Our Creative Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Brand Positioning & Messaging",
                description: "Defining your unique value & voice in the market with strategic positioning that resonates with local audiences.",
                delay: 0.1
              },
              {
                icon: Lightbulb,
                title: "Concept & Ideation",
                description: "Developing creative themes, campaigns & storytelling approaches that capture attention and drive engagement.",
                delay: 0.2
              },
              {
                icon: MessageSquare,
                title: "Content Strategy",
                description: "Aligning brand messaging with APAC consumer behavior to create content that converts across channels.",
                delay: 0.3
              },
              {
                icon: PenTool,
                title: "Visual Design",
                description: "Crafting high-end, market-specific visual identities that elevate your brand and create recognition.",
                delay: 0.4
              },
              {
                icon: Layers,
                title: "Asset Creation",
                description: "Producing compelling imagery, videos & branding collateral that tell your story across platforms.",
                delay: 0.5
              },
              {
                icon: Sparkles,
                title: "Sales Toolkits",
                description: "Equipping your teams with the assets they need to sell effectively in diverse APAC markets.",
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
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
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
            Your Brand =
            <span className="gradient-text block mt-2">Your Competitive Edge</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">3x</div>
              <p className="text-muted-foreground">
                higher engagement with strong brands compared to unbranded content
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">78%</div>
              <p className="text-muted-foreground">
                increase in customer trust with culturally relevant branding in APAC
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="stats-card"
            >
              <div className="text-4xl font-bold mb-4 gradient-text">64%</div>
              <p className="text-muted-foreground">
                of APAC consumers choose brands based on emotional connection
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
                  <h3 className="text-xl font-semibold mb-2">Build strong brand recognition in APAC markets</h3>
                  <p className="text-muted-foreground">
                    Create a powerful and memorable brand presence that resonates across diverse APAC cultures and audiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ensure brand consistency across platforms</h3>
                  <p className="text-muted-foreground">
                    Maintain a cohesive brand identity across all touchpoints, from digital to physical, enhancing recognition and trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create high-impact visuals and messaging</h3>
                  <p className="text-muted-foreground">
                    Develop compelling creative assets that drive engagement, conversions, and long-term brand loyalty.
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
            Our Creative
            <span className="gradient-text block mt-2">Process</span>
          </motion.h2>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Discovery & Research",
                  description: "We begin by immersing ourselves in your brand, audience, and APAC market dynamics to identify opportunities and challenges.",
                  icon: Search,
                  align: "right"
                },
                {
                  number: "02",
                  title: "Strategy Development",
                  description: "Based on our findings, we craft a comprehensive brand strategy that positions you for success in your target markets.",
                  icon: Lightbulb,
                  align: "left"
                },
                {
                  number: "03",
                  title: "Creative Concepting",
                  description: "Our creative team develops innovative concepts that bring your brand strategy to life in culturally relevant ways.",
                  icon: Brush,
                  align: "right"
                },
                {
                  number: "04",
                  title: "Design & Production",
                  description: "We create high-quality brand assets and materials that consistently communicate your brand message.",
                  icon: PenTool,
                  align: "left"
                },
                {
                  number: "05",
                  title: "Implementation & Activation",
                  description: "We help you launch your brand across channels and touchpoints, ensuring consistency and impact.",
                  icon: Megaphone,
                  align: "right"
                },
                {
                  number: "06",
                  title: "Measurement & Optimization",
                  description: "We continuously monitor performance and refine your brand strategy to maximize results.",
                  icon: BarChart,
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
              Let's Elevate Your Brand
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Today</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Ready to transform your brand presence in APAC with compelling creative and strategic messaging?
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