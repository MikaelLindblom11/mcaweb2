"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, Search, Globe, LineChart, MessageSquare, Users, BarChart } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  {
    title: "Research & Strategy",
    description: "Data-driven research and strategic planning",
    icon: Search,
    href: "/services/research-strategy"
  },
  {
    title: "Brand & Creative",
    description: "Market-specific brand messaging and creative",
    icon: Globe,
    href: "/services/brand-creative"
  },
  {
    title: "Web & SEO",
    description: "SEO-driven website development",
    icon: LineChart,
    href: "/services/web-seo"
  },
  {
    title: "Social Media Management",
    description: "Strategic social media for APAC markets",
    icon: MessageSquare,
    href: "/services/social-media"
  },
  {
    title: "Paid Advertising",
    description: "Targeted advertising across platforms",
    icon: BarChart,
    href: "/services/paid-advertising"
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive analytics solutions",
    icon: Users,
    href: "/services/analytics"
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = cn(
    "text-sm font-medium transition-colors hover:text-primary",
    isHome && !isScrolled ? "text-white" : "text-foreground"
  )

  const logoClass = cn(
    "font-bold text-xl transition-colors",
    isHome && !isScrolled ? "text-white" : "text-foreground"
  )

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md" 
        : isHome 
          ? "bg-transparent" 
          : "bg-white shadow-sm"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className={logoClass}>
          Marketing Collective Asia
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link href="/about" className={linkClass}>
              ABOUT
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 group">
                <span className={linkClass}>SERVICES</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180",
                  isHome && !isScrolled ? "text-white" : "text-foreground"
                )} />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-[350px] p-3 bg-white/80 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)"
                }}
              >
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link 
                        href={service.href}
                        className="flex items-start gap-4 p-4 cursor-pointer rounded-lg transition-all duration-300 hover:bg-primary/10 group/item"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-primary/20">
                          <Icon className="h-5 w-5 text-primary transition-all duration-300 group-hover/item:scale-110" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground mb-1 transition-all duration-300 group-hover/item:text-primary">
                            {service.title}
                          </div>
                          <div className="text-sm text-muted-foreground transition-all duration-300 group-hover/item:text-foreground">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/industries" className={linkClass}>
              INDUSTRIES
            </Link>
            <Link href="/insights" className={linkClass}>
              INSIGHTS
            </Link>
            <Link href="/contact" className={linkClass}>
              CONTACT US
            </Link>
          </nav>
          
          <Button 
            className={cn(
              "rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
              isHome && !isScrolled 
                ? "bg-white text-primary hover:bg-white/90" 
                : "bg-primary text-white hover:bg-primary/90"
            )} 
            asChild
          >
            <Link href="/contact">
              LET'S TALK
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className={cn(
                "h-6 w-6",
                isHome && !isScrolled ? "text-white" : "text-foreground"
              )} />
            </Button>
          </SheetTrigger>
          <SheetContent title="Navigation Menu">
            <nav className="flex flex-col gap-6 mt-8">
              <Link href="/about" className="text-lg font-medium">
                ABOUT
              </Link>
              <div className="space-y-3">
                <div className="text-lg font-medium">SERVICES</div>
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link 
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      {service.title}
                    </Link>
                  )
                })}
              </div>
              <Link href="/industries" className="text-lg font-medium">
                INDUSTRIES
              </Link>
              <Link href="/insights" className="text-lg font-medium">
                INSIGHTS
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                CONTACT US
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}