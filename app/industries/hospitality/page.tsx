"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Hotel, Plane, Map, CheckCircle2, Award, 
  Target, BarChart, Globe, LineChart, TrendingUp,
  ArrowUpRight, Smartphone, Utensils, Bed, Palmtree,
  MessageSquare, Heart, Star, DollarSign, Users, Search
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function HospitalityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };
  
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const hospitalitySectors = [
    {
      title: "Hotels & Resorts",
      description: "Drive direct bookings and reduce OTA dependency with targeted digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=100&w=1200&brightness=120&contrast=110",
      icon: Hotel,
      challenges: [
        "High OTA dependency",
        "Regional market penetration",
        "Multi-language campaigns"
      ],
      insights: [
        { 
          stat: "73%", 
          text: "of travelers research hotels on social media before booking",
          icon: Search,
          color: "primary",
          detail: "Social media has become a critical research tool for travelers, with platforms like Instagram and XiaohongShu heavily influencing hotel selection."
        },
        { 
          stat: "2.8x", 
          text: "higher conversion with localized content in APAC",
          icon: Globe,
          color: "secondary",
          detail: "Content tailored to specific APAC markets and languages significantly outperforms generic global content, especially for luxury properties."
        },
        { 
          stat: "68%", 
          text: "of APAC travelers prefer booking directly with hotels",
          icon: DollarSign,
          color: "accent",
          detail: "When given the right incentives and a seamless booking experience, the majority of travelers prefer booking directly with hotels rather than through OTAs."
        },
        { 
          stat: "42%", 
          text: "increase in direct bookings through targeted digital campaigns",
          icon: TrendingUp,
          color: "primary",
          detail: "Hotels implementing strategic digital marketing campaigns see significant shifts from OTA bookings to direct channels, improving profit margins."
        }
      ],
      approach: "We create multi-channel campaigns that target travelers directly, with a focus on WeChat, Xiaohongshu, and Instagram to showcase your property's unique experience.",
      results: [
        "45% increase in direct bookings",
        "32% reduction in OTA commission costs",
        "3.2x ROI on marketing spend"
      ],
      solutions: [
        "Meta & Google Ads",
        "Xiaohongshu & WeChat Marketing",
        "SEO & Local Search",
        "Influencer Marketing"
      ]
    },
    {
      title: "Tourism & Destination Marketing",
      description: "Build awareness and attract travelers from key APAC markets to your destination.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=100&w=1200&brightness=120&contrast=110",
      icon: Plane,
      challenges: [
        "Global audience engagement",
        "Destination awareness",
        "Campaign efficiency"
      ],
      insights: [
        { 
          stat: "68%", 
          text: "of Chinese travelers use social media for travel inspiration",
          icon: MessageSquare,
          color: "primary",
          detail: "Chinese travelers heavily rely on platforms like XiaohongShu and WeChat for discovering new destinations and planning their trips."
        },
        { 
          stat: "4.2x", 
          text: "higher engagement with video content for destinations",
          icon: Heart,
          color: "secondary",
          detail: "Video content showcasing destinations generates significantly more engagement than static images, especially on platforms like Douyin and Instagram."
        },
        { 
          stat: "79%", 
          text: "of APAC travelers research destinations at least 3 months in advance",
          icon: Search,
          color: "accent",
          detail: "The destination research phase begins much earlier than booking, creating opportunities for early-funnel marketing influence."
        },
        { 
          stat: "3.5x", 
          text: "higher conversion rates for campaigns featuring authentic experiences",
          icon: Star,
          color: "primary",
          detail: "Marketing campaigns highlighting authentic local experiences significantly outperform those focused solely on landmarks or accommodations."
        }
      ],
      approach: "We leverage visual storytelling across platforms like Douyin, Xiaohongshu, and Instagram to showcase your destination's unique experiences to APAC travelers.",
      results: [
        "57% increase in destination website traffic",
        "42% growth in booking inquiries",
        "3.8x improvement in campaign ROI"
      ],
      solutions: [
        "Multi-Language Digital Ads",
        "KOL Collaborations",
        "Destination Content Strategy",
        "Real-time Engagement"
      ]
    },
    {
      title: "Travel Experience Providers",
      description: "Connect with travelers and increase bookings for tours, activities, and experiences.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=100&w=1200&brightness=120&contrast=110",
      icon: Map,
      challenges: [
        "Seasonal demand",
        "Experience discovery",
        "Local competition"
      ],
      insights: [
        { 
          stat: "82%", 
          text: "of travelers book experiences after arrival at destination",
          icon: Smartphone,
          color: "primary",
          detail: "The majority of experience bookings happen in-destination, making mobile optimization and location-based marketing critical for success."
        },
        { 
          stat: "3.5x", 
          text: "higher conversion with user-generated content",
          icon: Users,
          color: "secondary",
          detail: "Authentic photos and reviews from real travelers significantly outperform professional marketing materials for experience providers."
        },
        { 
          stat: "64%", 
          text: "of travelers seek unique, local experiences over tourist attractions",
          icon: Palmtree,
          color: "accent",
          detail: "Modern travelers increasingly prioritize authentic, unique experiences that connect them with local culture over traditional tourist activities."
        },
        { 
          stat: "47%", 
          text: "higher booking rates for experiences with instant confirmation",
          icon: DollarSign,
          color: "primary",
          detail: "The ability to instantly confirm bookings significantly increases conversion rates, especially for last-minute and in-destination bookings."
        }
      ],
      approach: "We create hyper-local campaigns that target travelers before and during their trips, with a focus on mobile-first strategies and last-minute booking optimization.",
      results: [
        "63% increase in online bookings",
        "38% improvement in off-season revenue",
        "2.9x growth in repeat customers"
      ],
      solutions: [
        "Experience Marketing",
        "Local Partnership Strategy",
        "UGC Campaigns",
        "Booking Optimization"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-hidden" ref={containerRef}>
      {/* Hero Section - Split-Screen with Layered Effects */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=100&w=2000&brightness=120&contrast=110)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.1) contrast(1.1)',
            transform: `scale(1.05) translate(${(mousePosition.x - 0.5) * -10}px, ${(mousePosition.y - 0.5) * -10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/50" />
        
        {/* Animated particles - Only rendered client-side */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: Math.random() * 0.5 + 0.3 
                }}
                animate={{ 
                  y: [null, Math.random() * 100 + "%"],
                  opacity: [null, Math.random() * 0.5 + 0.1]
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
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-xl"
            >
              <motion.div 
                variants={fadeIn}
                className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20"
              >
                <span className="text-sm font-medium text-primary">Hospitality Marketing Experts</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
              >
                Digital Marketing for Hospitality & Travel Brands in APAC
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl text-muted-foreground mb-12"
              >
                We help hotels and resorts reduce reliance on OTAs, increase direct bookings, and engage travelers across China, Singapore, and Southeast Asia with localized marketing strategies.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all" asChild>
                  <Link href="/contact">
                    <span className="flex items-center">
                      Discover How We Can Help
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=100&w=1200&brightness=120&contrast=110"
                    alt="Hospitality Marketing in APAC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent" />
                  
                  {/* Floating data cards */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Bed className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-foreground/70">Direct Bookings</div>
                        <div className="text-lg font-semibold">Targeted Strategies</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 2 }}
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
      </section>

      {/* Stats Section - Floating Data Cards */}
      <section className="py-24 relative overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Impact on
              <span className="gradient-text block mt-2">Hospitality Brands in APAC</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven strategies that deliver measurable results for hospitality and travel companies across Asia-Pacific markets.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CountUpCard 
              icon={BarChart} 
              value={45} 
              suffix="%" 
              text="Average increase in direct bookings" 
              delay={0.1}
            />
            
            <CountUpCard 
              icon={Target} 
              value={3.2} 
              suffix="x" 
              text="Higher ROI than traditional marketing" 
              delay={0.2}
            />
            
            <CountUpCard 
              icon={Award} 
              value={10} 
              suffix="+" 
              text="Years of hospitality expertise in APAC" 
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Hospitality Sectors - Interactive Scroll-Based Storytelling */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 gradient-text text-center"
          >
            How We Support Hospitality Brands in APAC
          </motion.h2>

          <div className="grid gap-32">
            {hospitalitySectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                onViewportEnter={() => setActiveSection(index)}
              >
                <StaggeredSector 
                  sector={sector}
                  isActive={activeSection === index}
                  reverse={index % 2 !== 0}
                  expandedInsight={expandedInsight}
                  setExpandedInsight={setExpandedInsight}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=100&w=2000&brightness=120&contrast=110"
            alt="Luxury hotel lobby"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
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
              className="text-3xl md:text-5xl font-bold mb-8 gradient-text"
            >
              Ready to Boost Your Direct Bookings?
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-12 text-muted-foreground"
            >
              Let's discuss how we can help you attract more travelers and increase revenue with our tailored hospitality marketing solutions.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

// Animated count-up card component
function CountUpCard({ 
  icon: Icon, 
  value, 
  suffix = "", 
  text, 
  delay = 0 
}: { 
  icon: any, 
  value: number, 
  suffix?: string, 
  text: string, 
  delay?: number 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const easeOutQuad = (t: number) => t * (2 - t);
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(Math.floor(progress * value));
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(value);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, value]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-border/50 transition-all duration-500 group"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-8 text-center">
        <Icon className="h-10 w-10 text-primary mb-6 mx-auto" />
        <div className="text-4xl font-bold mb-4 gradient-text">{count}{suffix}</div>
        <div className="text-muted-foreground">{text}</div>
      </div>
    </motion.div>
  );
}

// Staggered grid layout with hover interactions
function StaggeredSector({ 
  sector, 
  isActive,
  reverse = false,
  expandedInsight,
  setExpandedInsight
}: { 
  sector: any, 
  isActive: boolean,
  reverse?: boolean,
  expandedInsight: number | null,
  setExpandedInsight: (index: number | null) => void
}) {
  const { title, description, image, icon: Icon, challenges, insights, approach, results, solutions } = sector;
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent -z-10"></div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Image area - 5 columns */}
          <div className={`md:col-span-5 md:sticky md:top-32 ${reverse ? 'md:order-last' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-6 left-6 h-16 w-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{title}</h3>
              <p className="text-muted-foreground mb-6">{description}</p>
              
              <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all" asChild>
                <Link href="/contact">
                  Elevate Your Hospitality Strategy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Content area - 7 columns */}
          <div className="md:col-span-7">
            <div className="grid gap-6">
              {/* Interactive tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { id: 'challenges', label: 'Challenges', icon: Target },
                  { id: 'insights', label: 'Insights', icon: BarChart },
                  { id: 'approach', label: 'Strategy', icon: LineChart },
                  { id: 'results', label: 'Results', icon: TrendingUp }
                ].map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'border-primary/50 bg-primary/5 shadow-md' 
                        : 'border-border/50 hover:border-primary/30 hover:bg-primary/5'
                    }`}
                    onClick={() => setActiveTab(tab.id === activeTab ? null : tab.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <tab.icon className={`h-6 w-6 mb-2 ${activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={activeTab === tab.id ? 'font-medium text-primary' : 'text-muted-foreground'}>
                        {tab.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Content panels */}
              <AnimatePresence mode="wait">
                {activeTab === 'challenges' && (
                  <motion.div
                    key="challenges"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-border/10"
                  >
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 text-primary mr-2" />
                      Key Challenges
                    </h4>
                    <ul className="grid gap-4">
                      {challenges.map((challenge: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 bg-muted/10 p-4 rounded-lg">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground/80">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'insights' && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-border/10"
                  >
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart className="h-5 w-5 text-primary mr-2" />
                      Market Insights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {insights.map((insight: any, i: number) => {
                        const InsightIcon = insight.icon || BarChart;
                        const isExpanded = expandedInsight === i;
                        
                        return (
                          <motion.div 
                            key={i} 
                            className={`bg-muted/10 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md relative overflow-hidden ${
                              isExpanded ? 'md:col-span-2 shadow-md' : ''
                            }`}
                            onClick={() => setExpandedInsight(isExpanded ? null : i)}
                            layout
                          >
                            <div className="flex items-start gap-3">
                              <div className={`h-10 w-10 rounded-lg bg-${insight.color || 'primary'}/10 flex items-center justify-center flex-shrink-0`}>
                                <InsightIcon className={`h-5 w-5 text-${insight.color || 'primary'}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-3xl font-bold gradient-text mb-1">{insight.stat}</div>
                                <p className="text-muted-foreground text-sm">{insight.text}</p>
                                
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="mt-3 pt-3 border-t border-border/20"
                                    >
                                      <p className="text-foreground/80 text-sm">{insight.detail}</p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            
                            <div className="absolute bottom-2 right-2 text-xs text-primary/70">
                              {isExpanded ? 'Click to collapse' : 'Click to expand'}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'approach' && (
                  <motion.div
                    key="approach"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-border/10"
                  >
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <LineChart className="h-5 w-5 text-primary mr-2" />
                      Our Strategy
                    </h4>
                    <p className="text-muted-foreground mb-4">{approach}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <h5 className="text-base font-medium mb-2 col-span-2">Our Solutions</h5>
                      {solutions.map((solution: string, i: number) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'results' && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-border/10"
                  >
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      Expected Results
                    </h4>
                    <ul className="grid gap-4">
                      {results.map((result: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 bg-muted/10 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {!activeTab && (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-border/10"
                  >
                    <div className="text-center py-8">
                      <h4 className="text-xl font-semibold mb-4">Select a category above</h4>
                      <p className="text-muted-foreground mb-4">Click on any tab to explore our hospitality marketing approach for {title}</p>
                      <ArrowUpRight className="h-8 w-8 text-primary/50 mx-auto animate-pulse" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}