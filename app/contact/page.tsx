"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Mail, Phone, MapPin, Send, 
  MessageSquare, Linkedin, Instagram, Facebook, 
  CheckCircle2, Calendar, ExternalLink,
  Globe, BarChart
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast.error("There was an error submitting your message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp number - hidden from display but used for links
  const whatsappNumber = "6591240180";
  const whatsappMessage = "Hi Marketing Collective Asia! I'd like to learn more about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=2000&brightness=80&contrast=110"
            alt="Modern office interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Let's Grow Your Brand in APAC
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
              Ready to discuss your digital marketing strategy? Our team of APAC marketing experts is here to help you achieve your growth objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-border/10 overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form className="grid gap-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="you@company.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information - 2 columns */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-border/10 h-full">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-8 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Our Offices</p>
                        <p className="text-muted-foreground mb-1">Singapore: 63 Chulia Street, Singapore</p>
                        <p className="text-muted-foreground">Shanghai: 1136 Xinzha Road, Shanghai</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Email</p>
                        <a 
                          href="mailto:info@marketingcollective.asia" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@marketingcollective.asia
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Phone</p>
                        <a 
                          href="tel:+6591240180" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Contact us by phone
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">WhatsApp</p>
                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-green-500 transition-colors flex items-center gap-1"
                        >
                          Chat with us on WhatsApp
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-auto">
                    <p className="font-medium text-lg mb-4">Follow Us</p>
                    <div className="flex space-x-4">
                      <Link 
                        href="https://www.linkedin.com/company/marketingcollectiveasia/?viewAsMember=true" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                      </Link>
                      <Link 
                        href="https://www.instagram.com/marketingcollectiveasia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-primary" />
                      </Link>
                      <Link 
                        href="https://www.facebook.com/marketingcollectiveasia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5 text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for APAC markets
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Strategy",
                description: "Market research & entry strategies for APAC expansion",
                icon: CheckCircle2
              },
              {
                title: "Brand & Creative",
                description: "Compelling brand messaging & creative assets",
                icon: ArrowRight
              },
              {
                title: "Web & SEO",
                description: "High-performance websites & search optimization",
                icon: Globe
              },
              {
                title: "Social Media",
                description: "Platform-specific social media management",
                icon: MessageSquare
              },
              {
                title: "Paid Advertising",
                description: "Targeted campaigns across search & social",
                icon: BarChart
              },
              {
                title: "Analytics & Insights",
                description: "Data-driven decision making & reporting",
                icon: Calendar
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-border/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
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
              Ready to Transform Your
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Digital Presence?</span>
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