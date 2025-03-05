"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Marketing Collective Asia</h3>
            <p className="text-muted-foreground">
              Your all-in-one digital marketing partner for APAC growth.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
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
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/research-strategy" className="text-muted-foreground hover:text-primary transition-colors">
                  Research & Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/brand-creative" className="text-muted-foreground hover:text-primary transition-colors">
                  Brand & Creative
                </Link>
              </li>
              <li>
                <Link href="/services/web-seo" className="text-muted-foreground hover:text-primary transition-colors">
                  Web & SEO
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/paid-advertising" className="text-muted-foreground hover:text-primary transition-colors">
                  Paid Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics & Insights
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <div className="mb-1 pb-1 border-b border-border/20">
                    <span className="font-medium text-foreground">Singapore:</span><br />
                    63 Chulia Street, Singapore
                  </div>
                  <div className="pt-1">
                    <span className="font-medium text-foreground">Shanghai:</span><br />
                    1136 Xinzha Road, China
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@marketingcollective.asia" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@marketingcollective.asia
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+6591240180" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact us by phone
                </a>
              </li>
              <li className="mt-6">
                <Button className="rounded-full" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Marketing Collective Asia. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}