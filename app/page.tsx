"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, ExternalLink, Clock,
  Search, Globe, LineChart, MessageSquare, Users, BarChart, Zap,
  Linkedin, Instagram, Facebook, Mail, Phone, MapPin
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ServicesSection } from "@/components/services-section"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { NewsletterPopup } from "@/components/newsletter-popup"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already dismissed or subscribed
      const hasInteracted = localStorage.getItem('newsletterInteraction');
      if (!hasInteracted) {
        setShowNewsletterPopup(true);
      }
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    }
  }, []);

  // Define stagger animation for use in the CTA section
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Define fadeIn animation for use in the CTA section
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Newsletter Popup */}
      {showNewsletterPopup && <NewsletterPopup />}
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/web-assest-skyline.jpeg"
            alt="Modern APAC skyline representing digital growth"
            fill
            className="object-cover brightness-80 contrast-110"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
          
          {/* Animated background elements - Only rendered client-side */}
          {isMounted && (
            <>
              <div className="animated-bg"></div>
              <div className="light-beam"></div>
              <div className="texture-overlay"></div>
              
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute opacity-20 rounded-full"
                    style={{
                      width: '300px',
                      height: '300px',
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      background: 'radial-gradient(circle, rgba(0,196,253,0.3) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                      animation: `pulse-gentle ${8 + i}s infinite alternate`
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="container relative z-20 py-32">
          <div className="max-w-3xl mt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-8 text-white hero-text"
            >
              Accelerate Your Growth in APAC with
              <span className="text-white block mt-2">Marketing Collective Asia</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 text-white hero-text"
            >
              From startups to Fortune 500 companies, we deliver data-driven strategies that generate measurable ROI and sustainable growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="modern-button text-white text-base group" asChild>
                <Link href="/industries">
                  <span className="flex items-center">
                    See How We Can Help You
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            {/* Floating scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
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
          </div>
        </div>
      </section>

      {/* One Agency Solution Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/web-background-partnership.jpg"
            alt="APAC Digital Growth"
            fill
            className="object-cover opacity-10"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40" />
          
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse-gentle" style={{ animationDuration: "15s" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/5 to-transparent animate-pulse-gentle" style={{ animationDuration: "20s", animationDelay: "5s" }}></div>
          </div>
          
          {/* Subtle geometric pattern */}
          <div className="geometric-pattern"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/web-assest-skyline.jpeg"
                  alt="APAC Digital Growth"
                  fill
                  className="object-cover brightness-80 contrast-105"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
                
                {/* Floating elements - Only rendered client-side */}
                {isMounted && (
                  <>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl float-element">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-foreground/70">Coverage</div>
                          <div className="text-sm font-semibold">APAC-Wide</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl float-element-delayed">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <div className="text-xs text-foreground/70">Teams in</div>
                          <div className="text-sm font-semibold">China & Singapore</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                One Agency Solution for
                <span className="gradient-text block mt-1">APAC</span>
              </h2>
              
              <div className="space-y-6 text-base">
                <p className="text-foreground/90 leading-relaxed">
                  <strong>With teams in Shanghai, Singapore, and key partners across APAC, we are your all-in-one digital marketing partner, including China.</strong> Our tailored strategies are rooted in each company's unique customer journey, driving brand awareness and sales growth.
                </p>
                
                <p className="text-foreground/90 leading-relaxed">
                  From strategy to execution, we help brands navigate the complexities of the APAC digital landscape. With deep expertise in key markets, we provide localized solutions that empower businesses to scale in this fast-growing region.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button className="modern-button text-white" asChild>
                    <Link href="/about">
                      <span className="flex items-center">
                        Learn More About Us
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Latest Insights Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Digital insights background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
          
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse-gentle" style={{ animationDuration: "15s" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/5 to-transparent animate-pulse-gentle" style={{ animationDuration: "20s", animationDelay: "5s" }}></div>
          </div>
          
          {/* Subtle texture overlay */}
          <div className="texture-overlay"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Latest
              <span className="gradient-text block mt-2">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with expert analysis and the latest industry trends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <InsightCard
              title="B2B Marketing Trends in China for 2025"
              excerpt="As China's economy continues to evolve, its B2B market presents immense opportunities for businesses that can adapt to its unique digital landscape."
              image="/trends-2025.png"
              date="March 1, 2024"
              url="https://www.linkedin.com/pulse/b2b-marketing-trends-china-2025-actionable-insights"
              delay={0.1}
            />

            <InsightCard
              title="An Inside Look at XiaohongShu"
              excerpt="Over 200 million users actively engage with XiaohongShu each month. Discover what makes this platform essential for brands in China."
              image="/xiaohongshu.png"
              date="February 25, 2024"
              url="https://www.linkedin.com/pulse/inside-look-xiaohongshu-what-brands-need-know"
              delay={0.2}
            />
            
            <InsightCard
              title="B2B Lead Generation in Southeast Asia"
              excerpt="Southeast Asia's digital economy is growing rapidly. Learn how to adapt your lead generation strategy for this dynamic market."
              image="/b2b-digital.png"
              date="February 22, 2024"
              url="https://www.linkedin.com/pulse/what-you-need-increase-digital-lead-generation"
              delay={0.3}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" variant="outline" className="group rounded-full border-primary/30 hover:border-primary/60 hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-300" asChild>
              <Link 
                href="https://www.linkedin.com/company/marketing-collective-asia/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center text-primary">
                  View More Insights
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - ENHANCED with Premium Design */}
      <section className="py-32 relative overflow-hidden bg-[#0a1a2f]">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            {/* No background image - using pure gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f] via-[#0d2a4a] to-[#0f3060]" />
          </motion.div>
          
          {/* Premium gradient overlay with blue tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#0a1a2f]/70 to-[#0a1a2f]/80" />
          
          {/* Animated light beam with increased visibility */}
          {isMounted && (
            <div className="light-beam opacity-20"></div>
          )}
          
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
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
              Ready to Accelerate Your
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Digital Growth?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/80 leading-relaxed">
              Get a customized strategy session with our APAC marketing experts and discover your growth potential.
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
      
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4" />
          {date}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">{excerpt}</p>
        
        <Button variant="outline" size="sm" className="group/btn rounded-full" asChild>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center">
              Read More
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}