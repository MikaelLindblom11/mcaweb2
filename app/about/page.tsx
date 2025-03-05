"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const leadershipTeam = [
    {
      id: 1,
      name: "Marius Ohl",
      role: "Client Services Director",
      image: "/images/marius-web.jpeg",
      linkedin: "https://www.linkedin.com/in/mariusohl/",
      bio: "Marius has over 14 years of professional expertise in digital marketing spanning the landscapes of both the Chinese and global markets. His background includes spearheading go-to-market strategies expanding into SEA at Tencent, steering country management in EU and NA markets within the luxury eyewear industry at EssilorLuxottica, and orchestrating agency operations for market newcomers in e-Commerce and B2B sectors within China."
    },
    {
      id: 2,
      name: "Mikael Lindblom",
      role: "Business Development Director",
      image: "/images/mikael-profile.jpeg",
      linkedin: "https://www.linkedin.com/in/mikaellindblom/",
      bio: "Mikael brings over 14 years of B2B sales and business development expertise in China and Asia. He has successfully guided a diverse range of industrial and B2B companies in their marketing development throughout the Asia Pacific region. Mikael is now based in Singapore, spearheading the expansion of Marketing Collective Asia and is the first contact for clients, guaranteeing a smooth on-boarding and integration process."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=2000&brightness=80&contrast=110"
            alt="Modern office environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
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
              Who We Are
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              At Marketing Collective Asia, we help brands navigate and grow in China and APAC with tailored, high-impact digital strategies.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              We specialize in <span className="font-semibold text-foreground">market-driven, data-backed solutions</span> that enable brands to <span className="font-semibold text-foreground">expand, engage, and lead</span> in the region's fast-evolving digital landscape. Recognizing that <span className="font-semibold text-foreground">every brand's journey is unique</span>, we craft strategies <span className="font-semibold text-foreground">rooted in research, data, and creativity</span>—aligning with your business goals, audience, and industry trends to drive <span className="font-semibold text-foreground">real business impact</span>.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          
          {/* Subtle grid background */}
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
              Our Approach
              <span className="gradient-text block mt-2">What Sets Us Apart</span>
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

      {/* Leadership Team Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 gradient-text text-center"
          >
            Meet Our Leadership
            <span className="block mt-2 text-foreground">Team</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 h-full border border-border/50 hover:border-primary/30 group">
                  <div className="p-8">
                    {/* Header with photo */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 shadow-md mb-4">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{leader.name}</h3>
                      <p className="text-lg font-medium text-foreground/80 mb-2">{leader.role}</p>
                      <Link 
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-sm">Connect on LinkedIn</span>
                      </Link>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground leading-relaxed text-center">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your Digital Presence?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Let's Talk</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Get in touch with our team of APAC marketing experts today.
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