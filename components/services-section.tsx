"use client"

import { ArrowRight, Search, Globe, LineChart, MessageSquare, BarChart, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the element is in view
      const start = rect.top <= 0 ? 0 : rect.top / windowHeight;
      const end = rect.bottom >= windowHeight ? 1 : rect.bottom / windowHeight;
      
      const progress = 1 - (end - start);
      setScrollY(Math.max(0, Math.min(1, progress)));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);
      
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('scroll', handleScroll);
    section.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate parallax values
  const y = scrollY * 100;

  return (
    <section ref={sectionRef} className="services-section py-24 relative bg-white" id="services">
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
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Elevate Your Brand with
            <span className="gradient-text block mt-2">Strategic Digital Marketing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Data-driven strategies that drive growth and increase revenue across APAC markets.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service cards with enhanced animations */}
          {[
            {
              icon: Search,
              title: "Research & Strategy",
              description: "Data-driven research to develop tailored strategies aligned with your customer's journey and key touchpoints.",
              href: "/services/research-strategy",
              delay: 0.1
            },
            {
              icon: Globe,
              title: "Brand & Creative",
              description: "Craft market-specific brand messaging and creative assets that resonate with your target audience and drive engagement.",
              href: "/services/brand-creative",
              delay: 0.2
            },
            {
              icon: LineChart,
              title: "Web & SEO",
              description: "Enhance your online visibility across APAC with SEO-driven website development and localization strategies.",
              href: "/services/web-seo",
              delay: 0.3
            },
            {
              icon: MessageSquare,
              title: "Social Media Management",
              description: "Strategic social media management tailored to each APAC market for maximum engagement and brand growth.",
              href: "/services/social-media",
              delay: 0.4
            },
            {
              icon: BarChart,
              title: "Paid Advertising",
              description: "Maximize lead generation with targeted advertising strategies across search and social platforms in APAC.",
              href: "/services/paid-advertising",
              delay: 0.5
            },
            {
              icon: Users,
              title: "Analytics & Insights",
              description: "Turn data into actionable insights with comprehensive analytics and tracking solutions.",
              href: "/services/analytics",
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
              style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`
              } as React.CSSProperties}
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <div className="flex items-center justify-center w-full h-full bg-white/50 rounded-xl">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">{service.title}</h3>
                  <p className="premium-card-description">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="premium-card-button"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}